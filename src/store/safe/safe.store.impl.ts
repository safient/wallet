import { action, makeObservable, observable } from 'mobx';
import { SafeStore } from './safe.store';
import { StoreImpl } from '../store/store.impl';
import { Types } from '@safient/core';

const UserNotFoundCode = 10;

export class SafeStoreImpl extends StoreImpl implements SafeStore {


  _wallet?: Types.Safe;


  constructor() {
    super();

    makeObservable<SafeStoreImpl, any>(this, {
      _wallet: observable,
      setWallet: action,
    });
  }

  get wallet(): Types.Safe|undefined {
    return this._wallet;
  }

  setWallet(wallet: Types.Safe) {
      this._wallet = wallet;
   }

   async resetStore() {
  }

}
