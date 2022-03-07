import { ServiceResponse } from "../core/service-response.";
import { SafientCore, Types } from "@safient/core";
import { Web3Provider } from "@ethersproject/providers";

export interface AccountService {
  /**
   * Opens a web3modal and allows the user to connect account
   */
  login(): Promise<ServiceResponse<Types.User>>;

  register(name: string, email: string): Promise<ServiceResponse<Types.User>>;

  loadAccount: (web3Provider: Web3Provider) => Promise<ServiceResponse<boolean>>;

  _connectWallet: () => void;
}
