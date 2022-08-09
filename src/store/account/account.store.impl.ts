import { action, computed, makeObservable, observable } from 'mobx';
import { AccountStore } from './account.store';
import { StoreImpl } from '../store/store.impl';
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { SafientCore, Types, Enums } from '@safient/core';

const UserNotFoundCode = 100;

export class AccountStoreImpl extends StoreImpl implements AccountStore {
  private web3Provider?: Web3Provider;
  signer?: JsonRpcSigner;
  network: Enums.NetworkType = Enums.NetworkType.testnet;
  name: string = '';
  email: string = '';
  chainId!: number;
  address!: string;
  balance?: string;
  safient!: SafientCore;
  _safientUser?: Types.User;

  constructor() {
    super();

    makeObservable<AccountStoreImpl, any>(this, {
      web3Provider: observable,
      signer: observable,
      chainId: observable,
      address: observable,
      balance: observable,
      _safientUser: observable,
      network: observable,
      name: observable,
      email: observable,
      userExists: computed,
      userSignedIn: computed,
      resetStore: action,
      setSafientUser: action,
      setUserInfo: action,
    });
  }

  async resetStore() {
    this._safientUser = undefined;
  }

  get safientUser(): Types.User {
    return this._safientUser!;
  }

  setSafientUser(user: Types.User) {
    this._safientUser = user;
  }

  setWeb3Account(
    provider: Web3Provider,
    signer: JsonRpcSigner,
    chainId: number,
    address: string,
    balance: string,
    safient: SafientCore
  ) {
    this.web3Provider = provider;
    this.signer = signer;
    this.chainId = chainId;
    this.address = address;
    this.balance = balance;
    this.safient = safient;
  }

  setUserInfo(name: string, email: string): void {
    this.name = name;
    this.email = email;
  }

  get userSignedIn(): boolean {
    return !!this._safientUser;
  }

  get userExists(): boolean {
    return this.errorCode !== UserNotFoundCode;
  }
}
