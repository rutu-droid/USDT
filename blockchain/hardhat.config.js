/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

const { API_URL, API_KEY , PRIVATE_KEY} = process.env;

module.exports = {
  solidity: '0.8.21',
  networks: {
    hardhat: {},
    polygon: {
      url:  API_URL ,
      accounts: [PRIVATE_KEY],
      //gasPrice: 225000000000,
    },
  },
  etherscan: {
    apiKey: API_KEY,
  },
};

