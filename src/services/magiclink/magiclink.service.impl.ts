import { ServiceResponse } from '../core/service-response.';
import {magic} from '../../utils/magic';
import { Service } from "../core/service";
import { MagiclinkService } from './magiclink.service';



export class MagicServiceImpl extends Service implements MagiclinkService {


    async loginWithEmail(email: string): Promise<ServiceResponse<boolean>> {
        try{
            let didToken = await magic.auth.loginWithMagicLink({
                email,
                redirectURI: new URL('/callback', window.location.origin).href,
            })

            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + didToken,
                },
              });
              console.log(res)
              if (res.status === 200) {
                // Set the UserContext to the now logged in user
                let userMetadata = await magic.user.getMetadata();
                console.log(userMetadata)
                return this.success<boolean>(true)
              }else{
                return this.success<boolean>(false)
              }
        }catch(e: any){
            return this.error<boolean>(e);
        }
    }

    async loginWithSocial(provider: string): Promise<ServiceResponse<boolean>> {
      try{
          const res = await magic.auth.loginWithRedirect({
            provider,
            redirectURI: new URL('/callback', window.location.origin).href
          })
          console.log(res)
          return this.success<boolean>(true)
      }catch(e: any){
          return this.error<boolean>(e);
      }
  }

    async authenticateWithServer(didToken: string): Promise<ServiceResponse<number>> {
       try{
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/login`, {
            method: 'POST',   
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + didToken,
            },
          });
          console.log("Callback",res)
          let userMetadata = await magic.user.getMetadata();
          console.log(userMetadata)
         return this.success<number>(res.status)
       }catch(e: any){
         return this.error<number>(e);
       }
    }
}