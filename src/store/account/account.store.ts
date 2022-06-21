import { StoreImpl } from '../store/store.impl';
import { IStore } from '../store';
import { SafientCore, Types } from '@safient/core';

export interface AccountStore extends StoreImpl, IStore {
  /**
   * Safient core modules
   */
  safient?: SafientCore;

  /**
   * User profile details
   */
  safientUser: Types.User;

  /**
   * Checks if the user exists after log In
   */
  userExists: boolean;

  /**
   * Checks if the user is signed In
   */
  userSignedIn: boolean;
}
