const INFURA_API_KEY = process.env.REACT_APP_INFURA_API_KEY;
const ETHERSCAN_API_KEY = process.env.REACT_APP_ETHERSCAN_API_KEY;
const POLYGONSCAN_API_KEY = process.env.REACT_APP_POLYGONSCAN_API_KEY;
const BSCSCAN_API_KEY = process.env.REACT_APP_BSCSCAN_API_KEY;

export enum Network {
  localhost = "localhost",
  mainnet = "mainnet",
  goerli = "goerli",
  mumbai = "mumbai",
  polygon = "polygon",
  bsctest = "bsctest",
  bsc = "bsc",
}

export const networks = {
  localhost: {
    name: 'Local Chain',
    chainId: 31337,
    url: "http://localhost:8545",
    blockExplorer: "",
    api: "",
    symbol: 'ETH',
  },
  mainnet: {
    name: 'Ethereum Mainnet',
    chainId: 1,
    url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
    blockExplorer: "https://etherscan.io",
    api: `https://api.etherscan.io/api?apikey=${ETHERSCAN_API_KEY}`,
    symbol: 'ETH',
  },
  goerli: {
    name: 'Goerli Testnet',
    chainId: 5,
    url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
    blockExplorer: "https://goerli.etherscan.io",
    api: `https://api-goerli.etherscan.io/api?apikey=${ETHERSCAN_API_KEY}`,
    symbol: 'ETH',
  },
  mumbai: {
    name: 'Polygon Testnet',
    chainId: 80001,
    url: "https://matic-mumbai.chainstacklabs.com",
    blockExplorer: "https://mumbai.polygonscan.com",
    api: `https://api-testnet.polygonscan.com/api?apikey=${POLYGONSCAN_API_KEY}`,
    symbol: 'MATIC',
  },
  polygon: {
    name: 'Polygon Mainnet',
    chainId: 137,
    url: "https://matic-mainnet.chainstacklabs.com",
    blockExplorer: "https://polygonscan.com",
    api: `https://api.polygonscan.com/api?apikey=${POLYGONSCAN_API_KEY}`,
    symbol: 'MATIC',
  },
  bsc: {
    name: 'BSC Mainnet',
    chainId: 56,
    url: "https://bsc-dataseed.binance.org",
    blockExplorer: "https://bscscan.com",
    api: `https://api.bscscan.com/api?apikey=${BSCSCAN_API_KEY}`,
    symbol: 'BNB',
  },
  bsctest: {
    name: 'BSC Testnet',
    chainId: 97,
    url: "https://data-seed-prebsc-1-s1.binance.org:8545",
    blockExplorer: "https://testnet.bscscan.com",
    api: `https://api-testnet.bscscan.com//api?apikey=${BSCSCAN_API_KEY}`,
    symbol: 'BNB',
  },
};

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
