import { ServiceResponse } from "services/core/service-response";


export interface MagiclinkService {


    loginWithEmail(email: string): Promise<ServiceResponse<boolean>>;

    authenticateWithServer(didToken: string): Promise<ServiceResponse<number>>

    loginWithSocial(provider: string): Promise<ServiceResponse<boolean>>
}