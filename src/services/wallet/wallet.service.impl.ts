import { Wallet as EthersWallet } from "ethers";
import { WalletService } from "./wallet.service";
import { Wallet, WalletInfo, WalletSecret } from "utils/Wallet";
import { ServiceResponse } from "../core/service-response";
import { AccountStoreImpl, SafeStoreImpl, stores } from "../../store";
import { Service } from "../core/service";
import { TransactionReceipt } from "@ethersproject/providers";

export class WalletServiceImpl extends Service implements WalletService {
  private readonly accountStore: AccountStoreImpl;
  private readonly safeStore: SafeStoreImpl;
  private wallet: Wallet;

  constructor() {
    super();
    this.accountStore = stores?.accountStore;
    this.safeStore = stores?.safeStore;
    this.wallet = new Wallet();
  }
  
  // Service API to create a new wallet

  async create(): Promise<ServiceResponse<WalletSecret>> {
    try {
      const wallet = await this.wallet.create(this.accountStore.chainId!);

      return this.success<WalletSecret>(wallet.data as WalletSecret);
    } catch (e: any) {
      return this.error<WalletSecret>(e.error);
    }
  }

  // Service API to load a wallet from mnemonic

  async load(mnemonic: string): Promise<ServiceResponse<EthersWallet>> {
    try {
      const wallet = await this.wallet.load(
        this.accountStore.chainId!,
        mnemonic
      );
      const walletInfo = await this.info();

      return this.success<EthersWallet>(wallet.data as EthersWallet);
    } catch (e: any) {
      return this.error<EthersWallet>(e.error);
    }
  }

  // Service API to fetch the basic account info for a wallet

  async info(): Promise<ServiceResponse<WalletInfo>> {
    try {
      const info = await this.wallet.info();

      if (info.data) {
        this.safeStore.setWallet(info.data);
      }

      return this.success<any>(info.data);
    } catch (e: any) {
      return this.error<any>(e.error);
    }
  }

  async send(to: string, value: string): Promise<ServiceResponse<TransactionReceipt>> {
    try {
      const txResponse = await this.wallet.send(to, value)  
      const txRecepit = await txResponse.wait();
      return this.success<TransactionReceipt>(txRecepit);
    } catch (e: any) {
      return this.error<any>(e.error);
    }
  }
}