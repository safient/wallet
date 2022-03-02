import React from "react";
import { MagicServiceImpl } from "../magiclink/magiclink.service.impl";
import { AccountServiceImpl } from "../account/account.service.impl";
import { EthereumServiceImpl } from "../ethereum/ethereum.service.impl";
import { SafeServiceImpl } from "../safe/safe.service.impl";
import { StorageServiceImpl } from "../storage/storage.service.impl";

export const storageService = new StorageServiceImpl();
export const accountService = new AccountServiceImpl();
export const ethereumService = new EthereumServiceImpl();
export const magiclinkService = new MagicServiceImpl();
class Services {
  safeService: SafeServiceImpl = new SafeServiceImpl();
  storageService: StorageServiceImpl = new StorageServiceImpl();
  accountService: AccountServiceImpl = new AccountServiceImpl();
  ethereumService: EthereumServiceImpl = new EthereumServiceImpl();
  magiclinkService: MagicServiceImpl = new MagicServiceImpl();
}

const services = new Services();
export const ServicesContext = React.createContext<Services>(services);
export const useServices = () => React.useContext(ServicesContext);
