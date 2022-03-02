import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import { ethers } from 'ethers';
import { ExternalProvider } from '@ethersproject/providers';

const customNodeOptions = {
  rpcUrl: 'http://127.0.0.1:8545', // Your own node URL
  chainId: 31337, // Your own node's chainId
  
};

export const magic = new Magic(process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY!, {
  extensions: [new OAuthExtension()],
  network: customNodeOptions

});

export const web3provider = new ethers.providers.Web3Provider(magic.rpcProvider);
console.log(web3provider)
