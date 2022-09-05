/*
1. You need to import the appropriate modules
2. You need web3 for interacting with the blockchain
3. You a provider that web3 would use. The provider can be ganache, Rinkeby, etc.
4. 
*/
const HDWalletProvider = require(`@truffle/hdwallet-provider`);
const Web3 = require('web3');

// we need the smart contract abi and evm
const { abi, evm } = require('./compile');

// setting up the provider to use Rinkeby
const mnemonicPhrase = 'tank gentle sell memory another fetch test token option actual debris layer';
const providerURL = 'https://rinkeby.infura.io/v3/e59d2497e1474fd3bc864fcb00025e37';

provider = new HDWalletProvider(
  mnemonicPhrase,
  providerURL
);

// Create an instance of Web3
const web3 = new Web3(provider);

// Deploy the contract
const deploy = async () => {
  // What do you need to deploy the contract?
  //
  // 1. Need an account (so get a list of accounts)
  const accounts = await web3.eth.getAccounts();

  console.log(`Attempting to deploy from account: ${accounts[1]}`);

  // 2. Create a new contract (passes it the contract interface)
  const result = await new web3.eth.Contract(abi)
  // 3. deploy the contract to the blockchain
    .deploy({ data: evm.bytecode.object, arguments: ['Food Shopping', 'Buy Apples']})
  // 4. Send a transaction to the smart contract
    .send({from: accounts[1], gas: '2000000'});
  
  console.log('Contract successfully deployed to', result.options.address);
    provider.engine.stop();
};

deploy();

