import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import { ethers } from 'ethers';
import { ExternalProvider } from '@ethersproject/providers';
import { NetworkUtil } from './networks';

//TODO: Fetch the url and chainID from network util 


const network = NetworkUtil.getNetworkById(42)

const customNodeOptions = {
  rpcUrl: network?.url, // Your own node URL
  chainId: network?.chainId, // Your own node's chainId
  
};

export const magic = new Magic(process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY, {
  extensions: [new OAuthExtension()],
  network: customNodeOptions

});

export const web3provider = new ethers.providers.Web3Provider(magic.rpcProvider);
