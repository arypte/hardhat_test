const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("testContract", function () {
  beforeEach(async function () {
    [owner, testUser] = await ethers.getSigners();
    // BnsContract = await ethers.deployContract("Bns");
    // ActionContract = await ethers.deployContract("ActionContract", [123, 456, BnsContract]);

    // BTCUSdHandler = await ethers.getContractAt("IBTCHandler", "0x682143652b6e305730DD12B0dC7c38d5048FB647");

    // ProxyFactory = await ethers.getContractFactory("ProxyContract");
    // logicContractV2 = await LogicFactoryV2.deploy();

    // proxyContract = await LogicFactoryV1.attach(proxyContract.target);

    // srcTokenHolder = await ethers.getImpersonatedSigner('0xeD7B0974dC5d98B9e7C83695C415d68b8781B0F8');

    // await helpers.setBalance(srcTokenHolder.address, 1000n * nativeToken.decimals);
    // console.log(await ethers.provider.getBalance(sender));
    // const coder = new ethers.AbiCoder();

    // const encoded = coder.encode([ "tuple(address,address,bytes,uint256)" ], [ BTCFiDepositAction ] );

    // console.log(encoded);

    contract = await ethers.deployContract("FunctionSelector");
  });

  describe("Initialize", function () {
    it("should", async function () {
      ethusdc =
        "0xbaa2abde000000000000000000000000640952e7984f2ecedead8fd97aa618ab1210a21c0000000000000000000000006c9944674c1d2cf6c4c4999fc7290ba105dcd70e00000000000000000000000000000000000000000000000000005af0bc6e5c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f4f67e8fbd5071b11ba4266cc92e370588d8b1290000000000000000000000000000000000000000000000000384440ccc735c18";
      data =
        "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000d85eb87cab9041ad00764b95796702b1104f42d7000000000000000000000000640952e7984f2ecedead8fd97aa618ab1210a21c00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000004259b8d5cb0000000000000000000000000000000000000000000000000000000000000184303006670000000000000000000000000000000000000000000000000000000000000020000000010000000000000000000000000000000000000000000000000000000003020301000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000080000000200000bfc640952e7984f2ecedead8fd97aa618ab1210a21c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f4f67e8fbd5071b11ba4266cc92e370588d8b129000000000000000000000000244619179a9457d7a4f9fb432447e6de6b9ebb540000000000000000000000000000000000000000000000000000004259b8d5cb00000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
      array = await contract.callDataDecodeStable(data);
      console.log(array);
      console.log(await helpers.getBalance(owner));
    });
  });
});