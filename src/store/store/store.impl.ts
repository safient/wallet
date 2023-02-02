import { action, computed, makeObservable, observable } from "mobx";
import { Store } from "./store";

export class StoreImpl implements Store {
  protected _fetching: boolean;
  protected _error: string;
  protected _code: number;
  protected _statusMessage: string;
  protected _customError: string;

  constructor() {
    this._fetching = false;
    this._error = "";
    this._code = 0;
    // todo- exp-remove if it didn't work
    this._statusMessage = "";
    this._customError = "";

    makeObservable<StoreImpl, any>(this, {
      _fetching: observable,
      _error: observable,
      _code: observable,
      fetching: computed,
      error: computed,
      errorCode: computed,
      setFetching: action,
      setError: action,
      _statusMessage: observable,
      setStatusMessage: action,
      _customError: observable,
      setCustomError: action,
    });
  }

  get fetching() {
    return this._fetching;
  }

  get error() {
    return this._error;
  }

  get errorCode() {
    return this._code;
  }

  getStatusMessage() {
    return this._statusMessage;
  }

  get customErrorMessage() {
    return this._customError;
  }

  public setFetching(flag: boolean) {
    this._fetching = flag;

    if (flag) {
      this._error = "";
    }
  }

  public setError(message?: string, code?: number) {
    this._error = message || "";
    this._code = code || 0;
    this.setFetching(false);
  }

  public setStatusMessage(status?: string) {
    this._statusMessage = status || "";
  }

  public setCustomError(errorCode?: number) {
    if (errorCode === 0) {
      this._customError = "You need to Sign in order to create the wallet";
    }
  }
}
