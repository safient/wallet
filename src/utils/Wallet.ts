import { generateMnemonic, mnemonicToSeed } from 'bip39';
import { providers, utils, Wallet as EthersWallet } from 'ethers';
import { hdkey } from 'ethereumjs-wallet';
import { privateToAddress } from 'ethereumjs-util';
import { ServiceResponse } from "../services/core/service-response";
import { NetworkUtil } from './networks';



export type Account = {
  address: string
  privateKey: string
}

export type WalletSecret = {
  address: string
  mnemonic: string
  wallet: EthersWallet
}

export type WalletInfo = {
  address: string
  balance: string
  latestTransactions: any
}

export class Wallet {
  private walletProvider!: EthersWallet
  

  async create(chainId: number): Promise<ServiceResponse<WalletSecret>> {

    try {

    const network = NetworkUtil.getNetworkById(chainId)!.url  

    const mnemonic = generateMnemonic()
    const account: Account = await this._loadAccount(mnemonic)
    
    const wallet: EthersWallet = await this._loadProvider(network, account.privateKey)
    const walletSecret: WalletSecret = {address: account.address, mnemonic: mnemonic, wallet: wallet}

    return new ServiceResponse({ data: walletSecret })

    }
    catch(err: any) {
      throw new ServiceResponse({error: err.error})
    }
  }

  async _loadAccount(mnemonic: string): Promise<Account> {

    try {
    const seed = await mnemonicToSeed(mnemonic)
    const hdwallet = hdkey.fromMasterSeed(seed)
    const wallet_hdpath = "m/44'/60'/0'/0/"
    const account_index = 0
    const fullPath = wallet_hdpath + account_index
    const wallet = hdwallet.derivePath(fullPath).getWallet()
    const privateKey = '0x' + wallet.getPrivateKey().toString('hex')

    const address = '0x' + privateToAddress(wallet.getPrivateKey()).toString('hex')

    return { address, privateKey }
  }
  catch(err: any) {
    throw Error('Account load failed')
  }
  }

  async _loadProvider(network: string, privateKey: string): Promise<EthersWallet> {

    try {

    const signableAccount = new EthersWallet(privateKey);

    const provider = new providers.JsonRpcProvider(network)

    this.walletProvider = signableAccount.connect(provider)
    
    return this.walletProvider
    }
    catch(err: any) {
      throw Error('Provider load failed')
    }
  }


  async load(chainId: number, mnemonic: string): Promise<ServiceResponse<EthersWallet>> {

    try {
  
      const network = NetworkUtil.getNetworkById(chainId)!.url  
      const account: Account = await this._loadAccount(mnemonic)
      const wallet: EthersWallet = await this._loadProvider(network, account.privateKey)
  
      return new ServiceResponse({ data: wallet })
  
      }
      catch(err: any) {
        throw new ServiceResponse({error: err.error})
      }

  }

  async info(): Promise<ServiceResponse<any>> {

    try {

      const apiURL = NetworkUtil.getNetworkById(await this.walletProvider.getChainId())?.api
      const address = await this.walletProvider.getAddress()
      const balance = await this.walletProvider.getBalance()
      const transactionsResp = await fetch(`${apiURL}&module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=5&sort=desc`).then(res => {return res.json()})
      const latestTransactions = transactionsResp.result

      const walletInfo = {
        balance: utils.formatEther(balance),
        address: address,
        latestTransactions: latestTransactions
      }

      return new ServiceResponse({data: walletInfo})

    }
    catch(err: any) {
      throw new ServiceResponse({error: err.error})

    }

  }

  async send(to: string, value: string): Promise<void> {
    const tx = {
      to: to,
      value: utils.parseEther(value),
    }

    const txResponse = await this.walletProvider?.sendTransaction(tx)
    console.log(txResponse)
  }
}