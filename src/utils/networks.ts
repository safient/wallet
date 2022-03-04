 
 const INFURA_API_KEY = 'c0201f3cd3894e30b62af4bb542b5779'
 const ETHERSCAN_API_KEY = 'H8IGZCCS8XCJYSXIA3GUUKW6CDECYYMNPG'

 enum Network  {
     localhost = 'localhost',
     mainnet = 'mainnet',
     kovan = 'kovan',
     polygontestnet = 'polygontestnet',
     polygon = 'polygon'

 }

 const networks = {
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

 }


