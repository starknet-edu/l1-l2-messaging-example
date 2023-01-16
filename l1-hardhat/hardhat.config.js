require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.6.12",
  networks: {
    ganache: {
      url: "http://localhost:8545",
      chainId: 1337
    }
  }
};
