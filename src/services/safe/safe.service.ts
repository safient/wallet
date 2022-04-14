import { ServiceResponse } from "../core/service-response";
import { Types } from "@safient/core";

export interface SafeService {

  get(safeId: string): Promise<ServiceResponse<Types.Safe>>

  create(
    name: string,
    description: string,
    beneficiary: string,
    data: string,
    claimType: number,
    DdayBasedTime: number
  ): Promise<ServiceResponse<Types.EventResponse>>

  claim(safeId: string): Promise<ServiceResponse<Types.EventResponse>>

  signal(safeId: string): Promise<ServiceResponse<boolean>>

  recover(safeId: string, role: string): Promise<ServiceResponse<Types.SecretSafe>>

}
