const { ethers } = require("ethers");

/**
 * 주어진 함수 시그니처에서 function selector를 생성합니다.
 * @param {string} functionSignature - 함수 시그니처, 예: "transfer(address,uint256)"
 * @returns {string} - function selector (첫 4바이트의 해시값)
 */
function getFunctionSelector(functionSignature) {
  // 함수 시그니처 해시 생성
  const hash = ethers.keccak256(ethers.toUtf8Bytes(functionSignature));

  // 첫 4바이트 추출 (8자리 16진수)
  const selector = hash.slice(0, 10);

  return selector;
}

const functionSignature = "removeLiquidityETH(address,uint256,uint256,uint256,uint256)";
const selector = getFunctionSelector(functionSignature);
console.log(`Function selector for "${functionSignature}" is ${selector}`);

// removeLiquidity(address,address,uint256,uint256,uint256,address,uint256) 0xbaa2abde
// removeLiquidityETH(address,uint256,uint256,uint256,uint256) 0xa2ad989f
