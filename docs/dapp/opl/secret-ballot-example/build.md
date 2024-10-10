# Build

Now that we have written our two smart contracts, let's compile and deploy them!

### Compiling

Compile both the host and enclave smart contracts by invoking:

```shell
npx hardhat compile
```

### Deploying

We can make deployments easier by using [Hardhat deploy](https://github.com/wighawag/hardhat-deploy).

```shell npm2yarn
npm install -D hardhat-deploy
```


Add the following configuration changes to your `hardhat.config.ts`:

```diff
diff --git a/backend/hardhat.config.ts b/backend/hardhat.config.ts
index cd8df42..0875e8e 100644
--- a/backend/hardhat.config.ts
+++ b/backend/hardhat.config.ts
@@ -1,8 +1,70 @@
-import { HardhatUserConfig } from "hardhat/config";
+import '@oasisprotocol/sapphire-hardhat';
 import "@nomicfoundation/hardhat-toolbox";
+import { HardhatUserConfig, task } from 'hardhat/config';
+
+const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [];
+
+task('deploy-ballot-box')
+  .addParam('hostNetwork')
+  .setAction(async (args, hre) => {
+    await hre.run('compile');
+    const ethers = hre.ethers;
+    const BallotBoxV1 = await ethers.getContractFactory('BallotBoxV1');
+    const signer = ethers.provider.getSigner();
+    const signerAddr = await signer.getAddress();
+
+    // Start by predicting the address of the DAO contract.
+    const hostConfig = hre.config.networks[args.hostNetwork];
+    if (!('url' in hostConfig)) throw new Error(`${args.hostNetwork} not configured`);
+    const provider = new ethers.providers.JsonRpcProvider(hostConfig.url);
+    let nonce = await provider.getTransactionCount(signerAddr);
+    if (args.hostNetwork === 'local') nonce++;
+    const daoAddr = ethers.utils.getContractAddress({ from: signerAddr, nonce });
+
+    const ballotBox = await BallotBoxV1.deploy(daoAddr);
+    await ballotBox.deployed();
+    console.log('expected DAO', daoAddr);
+    console.log('BallotBox', ballotBox.address);
+    return ballotBox.address;
+  });
+
+task('deploy-dao')
+  .addParam('ballotBoxAddr')
+  .setAction(async (args, hre) => {
+    await hre.run('compile');
+    const DAOV1 = await hre.ethers.getContractFactory('DAOV1');
+    const dao = await DAOV1.deploy(args.ballotBoxAddr);
+    await dao.deployed();
+    console.log('DAO', dao.address);
+    return dao;
+  });
+
+task('deploy-local').setAction(async (_args, hre) => {
+    await hre.run('compile');
+    const ballotBox = await hre.run('deploy-ballot-box', { hostNetwork: 'local' });
+    await hre.run('deploy-dao', { ballotBoxAddr: ballotBox });
+  });
 
 const config: HardhatUserConfig = {
   solidity: "0.8.18",
+  networks: {
+    hardhat: {
+      chainId: 1337, // @see https://hardhat.org/metamask-issue.html
+    },
+    local: {
+      url: 'http://127.0.0.1:8545',
+    },
+    'bsc-testnet': {
+      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
+      chainId: 97,
+      accounts,
+    },
+    'sapphire-testnet': {
+      url: 'https://testnet.sapphire.oasis.io',
+      chainId: 0x5aff,
+      accounts,
+    },
+  }
 };
 
 export default config;
```

#### Localhost

We can start local Hardhat node again:

```shell
npx hardhat node
```

Our deploy should succeed locally.

```shell
npx hardhat deploy-local --network localhost
Nothing to compile
No need to generate any newer typings.
Nothing to compile
No need to generate any newer typings.
expected DAO 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853
BallotBox 0x0165878A594ca255338adfa4d48449f69242Eb8F
Nothing to compile
No need to generate any newer typings.
DAO 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853
```

We will use these addresses in our frontend application.

#### Testnet

We can likewise deploy to [Testnet](../../dapp/sapphire/guide#testnet-and-mainnet)
with Sapphire.

In this case, we should prepare a wallet with Testnet tokens on both BNB Smart
Chain [Faucet](https://testnet.bnbchain.org/faucet-smart) and Sapphire [faucet](https://faucet.testnet.oasis.io).

We will use a common private key for both the host and enclave smart contracts.

```shell
export PRIVATE_KEY=
```

Deploy the enclave smart contract using Testnet parameters.

```shell
npx hardhat deploy-ballot-box --network sapphire-testnet --host-network bsc-testnet
Nothing to compile
No need to generate any newer typings.
expected DAO 0xFBcb580DD6D64fbF7caF57FB0439502412324179
BallotBox 0xFb40591a8df155da291A4B52E4Df9901a95b7C06
```

Next, use the obtained `BallotBox` address below to deploy the host smart
contract:

```shell
npx hardhat deploy-dao --network bsc-testnet --ballot-box-addr {BALLOT_BOX_ADDR}
Nothing to compile
No need to generate any newer typings.
DAO 0xFBcb580DD6D64fbF7caF57FB0439502412324179
```

:::info Example

You can try out and download a complete backend example with both host and
enclave smart contracts from the
[Oasis Playground repository][backend-example].

:::

[backend-example]: https://github.com/oasisprotocol/demo-opl-secret-ballot/tree/main/backend
