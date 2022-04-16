 
 const INFURA_API_KEY = 'c0201f3cd3894e30b62af4bb542b5779'
 const ETHERSCAN_API_KEY = 'H8IGZCCS8XCJYSXIA3GUUKW6CDECYYMNPG'

export enum Network  {
     localhost = 'localhost',
     mainnet = 'mainnet',
     kovan = 'kovan',
     rinkeby = 'rinkeby',
     ropsten = 'ropsten',
     goerli = 'goerli',
     polygontestnet = 'polygontestnet',
     polygon = 'polygon'

 }

 export const networks = {
    localhost: {
      chainId: 31337,
      url: 'http://localhost:8545',
      blockExplorer: '',
      api: ''
    },
    mainnet: {
      chainId: 1,
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      blockExplorer: 'https://etherscan.io',
      api: `https://api.etherscan.io/api?apikey=${ETHERSCAN_API_KEY}`,
    },
    kovan: {
      chainId: 42,  
      url: `https://kovan.infura.io/v3/${INFURA_API_KEY}`,
      blockExplorer: 'https://kovan.etherscan.io',
      api: `https://api-kovan.etherscan.io/api?apikey=${ETHERSCAN_API_KEY}`,

    },
    rinkeby: {
      chainId: 4,  
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      blockExplorer: 'https://rinkeby.etherscan.io',
      api: `https://api-rinkeby.etherscan.io/api?apikey=${ETHERSCAN_API_KEY}`,

    },
    ropsten: {
      chainId: 3,  
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      blockExplorer: 'https://ropsten.etherscan.io',
      api: `https://api-ropsten.etherscan.io/api?apikey=${ETHERSCAN_API_KEY}`,

    },
    goerli: {
      chainId: 5,  
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      blockExplorer: 'https://goerli.etherscan.io',
      api: `https://api-goerli.etherscan.io/api?apikey=${ETHERSCAN_API_KEY}`,

    },
    polygontestnet: {
        chainId: 80001,
      url: 'https://matic-mumbai.chainstacklabs.com',
      blockExplorer: 'https://mumbai.polygonscan.com',
      api: ''
    },
    polygon : {
        chainId: 137,
      url: 'https://matic-mumbai.chainstacklabs.com',
      blockExplorer: 'https://mumbai.polygonscan.com',
      api: ''
    },
  }

 export class NetworkUtil {

    static getNetworkById(chainId: number) {

        const network = Object.values(networks).find((network) => chainId === network.chainId);
        return network

    }

    static getNetworkByName(chain: keyof typeof Network) {

      return networks[chain];

  }

 }

//  export type Network = keyof typeof Network;


