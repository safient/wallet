import { Wallet as EthersWallet } from 'ethers';
import { ServiceResponse } from "../core/service-response";
import { WalletSecret } from "utils/Wallet";

export interface WalletService {

  create(): Promise<ServiceResponse<WalletSecret>>

  load(mnemonic: string): Promise<ServiceResponse<EthersWallet>>

  info(): Promise<ServiceResponse<any>>

}
