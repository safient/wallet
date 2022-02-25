import { ServiceResponse } from "../core/service-response.";
import { Types } from "@safient/core";

export interface SafeService {

  get(safeId: string): Promise<ServiceResponse<Types.Safe>>

  create(
    beneficiary: string,
    data: string,
    onchain: boolean,
  ): Promise<ServiceResponse<string>>

  claim(safeId: string): Promise<ServiceResponse<number>>

  signal(safeId: string): Promise<ServiceResponse<boolean>>

  recover(safeId: string): Promise<ServiceResponse<string>>

}
