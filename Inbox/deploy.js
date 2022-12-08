const HDwalletProvider= require('truffle-hdwallet-provider');

const Web3= require('web3');

const {Inf,bytecode}= require('./compile');

const provider = new HDwalletProvider(
  "range collect moment link credit quick agent salmon silent certain expire sunset",
  "https://rinkeby.infura.io/v3/c1cc7345b2174d439b4325bae2f3a901"
);

const web3= new Web3(provider);


const deploy=async () => { 

    const accounts= await web3.eth.getAccounts();

    console.log('Account : ', accounts[0])

    const result= await new web3.eth.Contract(JSON.parse(Inf))
    .deploy({data:bytecode,arguments:['Hi there']})
    .send({from:accounts[0],gas:'1000000'})

    console.log('contract deployed to ', result.options.address);
 }

 deploy();