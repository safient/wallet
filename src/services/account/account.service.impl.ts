import Web3Modal from "web3modal";
import { AccountService } from "./account.service";
import { ServiceResponse } from "../core/service-response";
import { AccountStoreImpl, stores } from "../../store";
import { Service } from "../core/service";
import { SafientCore, Types, Enums } from "@safient/core";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";

export class AccountServiceImpl extends Service implements AccountService {

  private readonly accountStore: AccountStoreImpl;

  constructor() {
    super();
    this.accountStore = stores?.accountStore;
  }



  async _connectWallet(): Promise<Web3Provider> {

    const web3Modal = new Web3Modal({
      cacheProvider: true,
      theme: 'light',
    });
    const injectedProvider = await web3Modal.connect();
    const web3Provider = new Web3Provider(injectedProvider);
    return web3Provider

  }

  async loadAccount(web3Provider: Web3Provider): Promise<ServiceResponse<boolean>> {

  
    try {
      const network = await web3Provider.getNetwork();
      const chainId =  network.chainId;
      const signer =  web3Provider.getSigner();
      const address = await signer.getAddress();
      const balance = await signer.getBalance();
      const safient = new SafientCore(
        signer,
        this.accountStore.network,
        Enums.DatabaseType.threadDB,
        '',
        ''
      );
      this.accountStore.setWeb3Account(web3Provider, signer, chainId, address, formatEther(balance), safient)

      return this.success<boolean>(true);

    } catch (e: any) {
      console.log(e)
      return this.error<boolean>(e);
    }
   

    
  }

  async login(wallet?: boolean): Promise<ServiceResponse<Types.User>> {
    try {

  
      if(wallet) {
      const provider = await this._connectWallet()
      await this.loadAccount(provider)
      }
      const user = await this.accountStore.safient.loginUser();

      console.log(user)

      if (user.data) {
        this.accountStore.setSafientUser(user.data);
      }

      return this.success<Types.User>(this.accountStore.safientUser);
    } catch (e: any) {
      return this.error<Types.User>(e);
    }
  }

  async register(name: string, email: string): Promise<ServiceResponse<Types.User>> {
    try {
      
      const user = await this.accountStore.safient.createUser(name, email, 0, this.accountStore.address, false);

      if (user.data) {
        this.accountStore.setSafientUser(user.data);
      }

      return this.success<Types.User>(this.accountStore.safientUser);
    } catch (e: any) {
      return this.error<Types.User>(e);
    }
  }
}
