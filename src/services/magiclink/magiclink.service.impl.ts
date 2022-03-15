import { ServiceResponse } from '../core/service-response';
import {magic} from '../../utils/magic';
import { Service } from "../core/service";
import { MagiclinkService } from './magiclink.service';
import { OAuthProvider } from '@magic-ext/oauth';



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
              if (res.status === 200) {
                // Set the UserContext to therich gerepuatio now logged in user
                let userMetadata = await magic.user.getMetadata();
                return this.success<boolean>(true)
              }else{
                return this.success<boolean>(false)
              }
        }catch(e: any){
            return this.error<boolean>(e);
        }
    }

    async loginWithSocial(provider: OAuthProvider): Promise<ServiceResponse<boolean>> {
      try{
        const res = await magic.oauth.loginWithRedirect({
          provider: provider,
          redirectURI: new URL('/callback', window.location.origin).href, // required redirect to finish social login
        });
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
          let userMetadata = await magic.user.getMetadata();
         return this.success<number>(res.status)
       }catch(e: any){
         return this.error<number>(e);
       }
    }
}