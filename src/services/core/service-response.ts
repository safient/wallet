import _ from "lodash";

export class ServiceResponse<T> {
  readonly data?: T;
  readonly error?: Error;
  readonly status?: T;

  constructor({
    data,
    error,
    status,
  }: {
    data?: T;
    error?: Error;
    status?: T;
  }) {
    this.data = data;
    this.error = error;
    this.status = status;
  }

  hasData(): boolean {
    return !!this.data;
  }

  hasError(): boolean {
    return !this.hasData();
  }

  // TODO: return proper error message
  getErrorMessage(): string {
    return _.get(
      this.error,
      "message",
      _.get(
        this.error,
        "error.message",
        "Something went wrong. please try again after sometime"
      )
    );
  }

  getErrorCode(): number {
    return _.get(this.error, "error.code", 0);
  }

  getStatus(): string {
    return _.get(this.status, "");
  }
}
