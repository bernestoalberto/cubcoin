const Test = require('../config/testConfig.js')
//const truffleAssert = require('truffle-assertions')

contract('Cuba Coin Tests', async (accounts) => {
  
  // Operations and Settings
  // !!!!Warning: .toWei() returns a string
  /*const minFund = web3.utils.toWei('10', 'ether')
  const insurancePayment = web3.utils.toWei('0.1', 'ether')
  const ticketPrice = web3.utils.toWei('0.5', 'ether')
  const takeOff = Math.floor(Date.now() / 1000) + 1000
  const landing = takeOff + 1000
  const from = 'HAM'
  const to = 'PAR'
  const flightRef = 'AF0187'*/

  before('setup contract', async () => {
    var config = Test;
    console.log(config);
    await new  config.kubcoin
  })

  it('Get Owners Balance ', async () => {
    let balance = config.kubcoin.balanceOf(accounts[0])
    assert.equal(balance, 100000000)
  })
});
