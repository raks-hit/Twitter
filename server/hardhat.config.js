
 require("@nomicfoundation/hardhat-chai-matchers");
require('dotenv').config()
require("@nomiclabs/hardhat-ethers");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ahBF6nj5JAMZvP0DxA2D2_qv0WvvLxRI",
      accounts: ["16967874e3aac1264b11afc0329492292fa63d6d308e91e4fed7939d53f67c25"],
    }
  }
};
// 0xcd0b7F1d91cc0dAbe50721519Adfcb6aA35CEA94