import { ServiceResponse } from "../core/service-response";
import { WalletSecret } from "utils/Wallet";

export interface WalletService {

  create(): Promise<ServiceResponse<WalletSecret>>

}
