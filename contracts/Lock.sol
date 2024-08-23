// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;
import { Bns } from "./Bns.sol";

contract SetbcImplementationStorage{

    uint public a;
    uint public b;
    constructor(uint _a, uint _b){ a = _a; b = _b; }

}


contract ActionContract {

    SetbcImplementationStorage immutable implStorage;
    address immutable test;

    constructor(uint a, uint b, address _add){
        implStorage = new SetbcImplementationStorage(a,b);
        test = _add;
    }

    function execute() public {
        Bns callcontract = Bns(test);
        callcontract.setbc(implStorage.a());
    }

}

contract Executor {

    address public test;

    constructor(address _test){
        test = _test;
    }

    function execute() external{
        (bool success,) = test.delegatecall(abi.encodeWithSignature("execute()"));

        require(success, "implementation failed");
    }

}


