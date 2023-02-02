import { ServiceResponse } from "./service-response";

export abstract class Service {
  protected success<T>(data: T): ServiceResponse<T> {
    return new ServiceResponse<T>({ data });
  }

  protected error<T>(error: Error): ServiceResponse<T> {
    return new ServiceResponse<T>({ error });
  }

  protected status<T>(status: T): ServiceResponse<T> {
    return new ServiceResponse<T>({ status });
  }
}
