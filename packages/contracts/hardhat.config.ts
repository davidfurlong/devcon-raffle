import 'hardhat-typechain'
import '@nomiclabs/hardhat-waffle'
import './abi-exporter'
import 'tsconfig-paths/register'
import 'hardhat-gas-reporter'
import 'scripts/tasks/nodeTasks'
import 'scripts/tasks/auctionRaffle/ethereumTasks'
import 'scripts/tasks/auctionRaffle/hardhatTasks'
import 'scripts/tasks/auctionRaffle/rinkebyTasks'
import 'scripts/tasks/auctionRaffle/arbitrumTasks'
import 'hardhat-tracer'
import '@nomicfoundation/hardhat-verify'

import mocharc from './.mocharc.json'
import compiler from './.compiler.json'

require('dotenv').config({ path: '../../.env' })

const zeroPrivateKey = '0x0000000000000000000000000000000000000000000000000000000000000000'

module.exports = {
  paths: {
    sources: './contracts',
    artifacts: './build',
    cache: './cache',
  },
  abiExporter: {
    path: './build',
    flat: true,
    spacing: 2,
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      initialDate: '2022-01-01T00:00:00',
      allowUnlimitedContractSize: true,
      accounts: {
        count: 120,
      },
    },
    arbSepolia: {
      url: 'https://sepolia-rollup.arbitrum.io/rpc',
      accounts: [process.env.DEPLOYER || zeroPrivateKey],
    },
    ethereum: {
      url: 'https://eth-mainnet.alchemyapi.io/v2/j_dccrP25UjZv5uYxh1mcjEl5o8nWZaf',
    },
    arbitrum: {
      url: `https://arb1.arbitrum.io/rpc`,
      accounts: [process.env.DEPLOYER || zeroPrivateKey],
    },
  },
  typechain: {
    outDir: 'build/types',
    target: 'ethers-v5',
  },
  solidity: {
    compilers: [compiler],
  },
  mocha: {
    ...mocharc,
    timeout: 400000,
  },
  etherscan: {
    apiKey: {
      arbitrumSepolia: process.env.ARBISCAN_API_KEY,
      arbitrumOne: process.env.ARBISCAN_API_KEY,
    },
  },
}
