import { ServiceResponse } from "../core/service-response";
import { MagicUtil } from "../../utils/magic";
import { Service } from "../core/service";
import { AccountStoreImpl, stores } from "store";
import { MagiclinkService } from "./magiclink.service";
import { OAuthProvider } from "@magic-ext/oauth";
import { Enums } from "@safient/core";
import { Magic } from "magic-sdk";
import { ethers } from "ethers";

export class MagicServiceImpl extends Service implements MagiclinkService {
  private readonly accountStore: AccountStoreImpl;
  public magic: Magic;
  public web3Provider: ethers.providers.Web3Provider;


  constructor() {
    super();
    this.accountStore = stores?.accountStore;
    const magicUtil = new MagicUtil(this.getChainId());
    this.magic = magicUtil.magic;
    this.web3Provider = magicUtil.web3provider;
  }

  getChainId = () => {
    if (this.accountStore.network == Enums.NetworkType.testnet) {
      return 80001;
    } else if (this.accountStore.network == Enums.NetworkType.devnet) {
      return 31337;
    }
    return 0;
  };

  

  async loginWithEmail(email: string): Promise<ServiceResponse<boolean>> {
    try {
      let didToken = await this.magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL("/callback", window.location.origin).href,
      });

      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + didToken,
        },
      });
      if (res.status === 200) {
        // Set the UserContext to therich gerepuatio now logged in user
        let userMetadata = await this.magic.user.getMetadata();
        return this.success<boolean>(true);
      } else {
        return this.success<boolean>(false);
      }
    } catch (e: any) {
      return this.error<boolean>(e);
    }
  }

  async loginWithSocial(
    provider: OAuthProvider
  ): Promise<ServiceResponse<boolean>> {
    try {
      const res = await this.magic.oauth.loginWithRedirect({
        provider: provider,
        redirectURI: new URL("/callback", window.location.origin).href, // required redirect to finish social login
      });
      return this.success<boolean>(true);
    } catch (e: any) {
      return this.error<boolean>(e);
    }
  }

  async authenticateWithServer(
    didToken: string
  ): Promise<ServiceResponse<number>> {
    try {
      let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + didToken,
        },
      });
      let userMetadata = await this.magic.user.getMetadata();
      return this.success<number>(res.status);
    } catch (e: any) {
      return this.error<number>(e);
    }
  }
}
