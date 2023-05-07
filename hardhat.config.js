require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config(); 

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.GOERLI_URL; 
const PRIVATE_KEY = process.env.PRIVATE_KEY; 
module.exports = {
  solidity: "0.8.17", 
  networks: {
    goerli: {
      url: "https://rpc.goerli.mudit.blog/",
      accounts: [PRIVATE_KEY],
    },
  },
}; 


7f2ba84579e13e963d1e2f4f1845458a5a2f8baf5c678ba6207414d736b06aa4