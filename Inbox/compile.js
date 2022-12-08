const fs = require('fs')
const path =require( 'path')
const solc =require( 'solc')

const dir= path.resolve(__dirname,'contracts','Inbox.sol');

const sourceFile= fs.readFileSync(dir,'utf8');

    const { interface:Inf, bytecode } = solc.compile(sourceFile, 1)
    .contracts[
      ":Inbox"
    ]; //takes the inbox key

module.exports={Inf,bytecode};