import { Wallet as EthersWallet } from 'ethers';
import { ServiceResponse } from "../core/service-response";
import { WalletSecret } from "utils/Wallet";
import { TransactionReceipt } from '@ethersproject/providers';

export interface WalletService {

  create(): Promise<ServiceResponse<WalletSecret>>

  load(secret: { mnemonic?: string; privateKey?: string }): Promise<ServiceResponse<EthersWallet>>

  info(): Promise<ServiceResponse<any>>

  send(to: string,  value: string): Promise<ServiceResponse<TransactionReceipt>>

}
