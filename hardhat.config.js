require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const { MAINNET_API_URL, MUMBAI_API_URL } = process.env;
const fs = require("fs");

const PRIVATE_KEY = fs.readFileSync(".secret").toString()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: MUMBAI_API_URL,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: MAINNET_API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: "0.8.7",
};
