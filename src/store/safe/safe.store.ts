import { StoreImpl } from '../store/store.impl';
import { IStore } from '../store';
import { Types  } from '@safient/core';

export interface SafeStore extends StoreImpl, IStore {




  wallet: Types.Safe|undefined;

   /**
   * Checks if the user is signed In
   */
  setWallet: (wallet: Types.Safe) => void;
}
