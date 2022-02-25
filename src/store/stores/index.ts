import { AccountStoreImpl, AppStoreImpl, SafeStoreImpl} from '../index';
import { IStore } from '../store';
import { action, makeObservable, observable } from 'mobx';

export enum StoreType {
  ACCOUNT = 'accountStore',
  APP = 'appStore',
  SAFE = 'safeStore'
}

export interface Stores extends IStore {
  /**
   * Contains safe specific details
   */
  safeStore: SafeStoreImpl;

  /**
   * contains app related details
   */
  appStore: AppStoreImpl;

  /**
   * Contains account specific details such as jwt, profile etc.
   */
   accountStore: AccountStoreImpl;
}

export class StoresImpl implements Stores {
  accountStore: AccountStoreImpl;
  appStore: AppStoreImpl;
  safeStore: SafeStoreImpl;

  constructor() {
    this.accountStore = new AccountStoreImpl();
    this.appStore = new AppStoreImpl();
    this.safeStore = new SafeStoreImpl();

    makeObservable<StoresImpl, any>(this, {
      accountStore: observable,
      appStore: observable,
      safeStore: observable,
      resetStore: action,
    });
  }

  resetStore = (): void => {
    // All the stores must be reset here
    this.accountStore.resetStore();
    this.appStore.resetStore();
    this.safeStore.resetStore();
  };
}

export const stores: Stores = new StoresImpl();
