require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "a24b2bae04e774e4d8763ba07b94e2f621511f4590d4f2c41fde6a84d2b2ccc5";
const RPC_URL = "https://rpc.ankr.com/polygon_mumbai";

module.exports = {
  defaultNetwork: "polygon_mumbai",
  networks:{
    hardhat: {
      chainId: 80001,
    },
    polygon_mumbai: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.9",
    settings:{
      optimizer:{
        enabled: true,
        runs: 200,
      },
    },
  },
};