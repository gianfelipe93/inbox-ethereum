const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const {
    interface,
    bytecode
} = require('./compile')
const INITIAL_MESSAGE = "Hello World"

const provider = new HDWalletProvider(
    'mixed garment pencil ill thrive kid thought shiver runway modify uncover effort',
    'https://rinkeby.infura.io/0cR68gmvGMTNHYrftGJs'
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: [INITIAL_MESSAGE]
        })
        .send({
            gas: '1000000',
            from: accounts[0]
        })

    console.log("Contract deployed to: " + result.options.address)
}

deploy()