import { WalletService } from "./wallet.service";
import { Wallet, WalletSecret } from "utils/Wallet";
import { ServiceResponse } from "../core/service-response";
import { AccountStoreImpl, stores } from "../../store";
import { Service } from "../core/service";

export class WalletServiceImpl extends Service implements WalletService {

  private readonly accountStore: AccountStoreImpl;
  private wallet: Wallet;

  constructor() {
    super();
    this.accountStore = stores?.accountStore;
    this.wallet = new Wallet()
  }

  // Service API to create a new wallet

  async create(): Promise<ServiceResponse<WalletSecret>> {

    try {

      const wallet = await this.wallet.create(this.accountStore.chainId!)

      return this.success<WalletSecret>(wallet.data as WalletSecret);

     
    } catch (e: any) {

      return this.error<WalletSecret>(e.error)
    }
  }


}
