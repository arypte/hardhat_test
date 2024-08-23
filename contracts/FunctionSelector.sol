// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import { BytesLib } from './BytesLib.sol';

contract FunctionSelector {

    function getFunctionSelector(string memory _input) public pure returns (bytes4) {
        return bytes4(keccak256(bytes(_input)));
    }

    function callTransfer(address to, uint256 amount, string memory _input) public pure returns (bytes memory) {
        bytes4 selector = getFunctionSelector(_input);
        return abi.encodeWithSelector(selector, to, amount);
    }

    function callDataDecodeStable(bytes memory _input) public pure returns(address,uint,uint256[] memory){

    bytes memory testData = BytesLib.slice(_input, 4, _input.length - 4);

    (address r1,uint r2,uint[] memory amountMins,,) = abi.decode(testData, (address,uint256,uint256[],address,uint256)); // removeLiquidityStableSwap
    // (address tokena,address tokenb,uint lq,uint b,uint a,address user,) = abi.decode(testData, (address,address,uint256,uint256,uint256,address,uint256)); // removeLiquidityStableSwap
     
    return (r1,r2,amountMins);
        
    }

    function callDataDecodeRemoveLq(bytes memory _input) public pure returns(address,address,uint, uint,address){

        bytes memory testData = BytesLib.slice(_input, 4, _input.length - 4);

        // (,,uint[] memory amountMins,,) = abi.decode(testData, (address,uint256,uint256[],address,uint256)); // removeLiquidityStableSwap
        (address tokena,address tokenb,uint lq,uint b,uint a,address user,) = abi.decode(testData, (address,address,uint256,uint256,uint256,address,uint256)); 
        
        return (tokena,tokenb,a,b,user);
        
    }
}

// swapExactETHForTokens(uint256,address[],address,uint256) 
//0x3f211408000000000000000000000000840cf4522ed96cbbeb0924672ea170456eea3a4c000000000000000000000000000000000000000000000002b5d1eb9d79a7800000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000f4f67e8fbd5071b11ba4266cc92e370588d8b1290000000000000000000000000000000000000000000000000384440ccc735c18000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

// struct CCCPV1BridgeAction {
//       address targetContract;
//       address tokenAddressIn;
//       bytes executionData;
//       uint256 amountIn;
// }