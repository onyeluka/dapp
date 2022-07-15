require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.1",
  networks: {
     rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/_BhYKKHl8Tc1oMZ09Fb6d5IHOh-EJzjT',
      accounts: ['a6e4af5b2b8323e965876d94d9ce635723a8a7193e61000d241cddeaa613f3e4'],
    },
  },
};
