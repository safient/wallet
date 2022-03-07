import React from "react";

import { AccountServiceImpl } from "../account/account.service.impl";
import { EthereumServiceImpl } from "../ethereum/ethereum.service.impl";
import { SafeServiceImpl } from "../safe/safe.service.impl";
import { StorageServiceImpl } from "../storage/storage.service.impl";
import { WalletServiceImpl } from "../wallet/wallet.service.impl";

class Services {
  safeService: SafeServiceImpl = new SafeServiceImpl();
  storageService: StorageServiceImpl = new StorageServiceImpl();
  accountService: AccountServiceImpl = new AccountServiceImpl();
  ethereumService: EthereumServiceImpl = new EthereumServiceImpl();
  walletService: WalletServiceImpl = new WalletServiceImpl();
}

const services = new Services();
export const ServicesContext = React.createContext<Services>(services);
export const useServices = () => React.useContext(ServicesContext);
