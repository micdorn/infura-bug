const Web3 = require('web3')
const { fromWei } = require('web3-utils')

let provider = new Web3.providers.WebsocketProvider(
  'wss://mainnet.infura.io/ws/v3/d44c7ae787e4470499b9a8118db2f71e'
)
const web3 = new Web3(provider)

function main() {
  web3.eth.subscribe('newBlockHeaders').on('data', async (block) => {
    console.log(`\nRecieved new block #${block.number}.`)
    const balance = await web3.eth.getBalance('0xeE4eD7389A1C565CE7Ba4586D86D049780d2fE5d')
    console.log('balance', fromWei(balance))
  })
}

main()
