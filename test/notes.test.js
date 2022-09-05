const assert = require('assert');
const ganarche = require('ganache-cli');
const Web3 = require('web3');

const { abi, evm } = require('../compile')

const web3 = new Web3(ganarche.provider());
let accounts;
let notes;

beforeEach( async () => {
  // get a list of accounts
  accounts = await web3.eth.getAccounts()
  
  // deployed the contract
  notes = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ['Food Shopping','buy apples']})
    .send({from: accounts[0], gas: '1000000'})
});

// Test that functionalities work
describe('Notes', () => {
  it('deploy contract', () => {
    assert.ok(notes.options.address);
  });

  it('has a title', async () => {
    const title = await notes.methods.title().call();
    assert.equal(title, 'Food Shopping');
  });

  it('has text', async () => {
    const text = await notes.methods.text().call();
    assert.equal(text, 'buy apples');
  });
})

/*
1. You need to import the appropriate modules
2. You need web3 for interacting with the blockchain
3. You a provider that web3 would use. The provider can be ganache, Rinkeby, etc.
4. 
*/