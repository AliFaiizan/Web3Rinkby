const assert = require("assert");

const ganache = require("ganache-cli");
const Web3 = require("web3");
const { Inf, bytecode } = require("../compile.js");

const web3 = new Web3(ganache.provider());


let accounts;
let inbox;
let message;

beforeEach(async () => {
  //get a list of all accounts
  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(JSON.parse(Inf))
    .deploy({ data: bytecode, arguments: ["hi there"] })
    .send({ from: accounts[0], gas: "1000000" });

  //use one of those accoutn to deploy the contract
});

describe("inbox contract", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
  });

  it("has a default message", async () => {
    message = await inbox.methods.message().call();
    assert.equal(message, "hi there");
  });

  it("can change the message", async () => {
    await inbox.methods
      .setMessage("bye")
      .send({ from: accounts[0], gas: "1000000" });

    message= await inbox.methods.message().call();

    assert.equal(message,'bye')
  });
});

