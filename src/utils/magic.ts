import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";
import { ethers } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";
import { NetworkUtil } from "./networks";


export class MagicUtil {
  private readonly network: any;
  private readonly customNodeOptions: any;
  public magic: Magic;
  public web3provider: ethers.providers.Web3Provider;

  constructor(chainId: number) {
    this.network = NetworkUtil.getNetworkById(chainId);

    this.customNodeOptions = {
      rpcUrl: this.network?.url, // Your own node URL
      chainId: this.network?.chainId, // Your own node's chainId
    };

    this.magic = new Magic(process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY, {
      extensions: [new OAuthExtension()],
      network: this.customNodeOptions,
    });

    this.web3provider = new ethers.providers.Web3Provider(
      this.magic.rpcProvider
    );
  }
}
