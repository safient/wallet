import { StoreImpl } from '../store/store.impl';
import { IStore } from '../store';
import { Types  } from '@safient/core';
import { WalletSecret, WalletInfo } from '../../utils/Wallet'

export interface SafeStore extends StoreImpl, IStore {


  walletInfo?: WalletInfo;

  walletSecret?: WalletSecret;

  safe?: Types.Safe;

  
  setSafe: (safe: Types.Safe) => void;

  setWallet: (info: WalletInfo, secret?: WalletSecret) => void;
}
