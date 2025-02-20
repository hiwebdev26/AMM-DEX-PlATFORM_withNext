// lib/useAddLiquidity.ts
import { useCallback } from 'react';
// import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
import { RouterAbi } from '../abi/RouterAbi';
import { USDCAbi } from '../abi/USDCAbi';
import { KStarAbi } from '../abi/KStarAbi';

const routerAddress = '0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008';

export const useAddLiquidity = () => {
  // const { address } = useAccount();

  const addLiquidity = useCallback(async (
    tokenAAddress: string,
    tokenBAddress: string,
    amountADesired: string,
    amountBDesired: string,
    slippageTolerance: number
  ) => {
    const ethereum = (window as any).ethereum;
    if (typeof ethereum === 'undefined') {
      throw new Error("Ethereum provider not found");
    }
    
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();

    console.log("--->>>", signer)
    
    const routerAbi = RouterAbi;
    
    // Contracts including the router contract and both tokens
    const router = new ethers.Contract(routerAddress, routerAbi, signer);
    const tokenAContract = new ethers.Contract(tokenAAddress, USDCAbi, signer);
    const tokenBContract = new ethers.Contract(tokenBAddress, KStarAbi, signer);

    // Amounts and deadline
    const amountADesiredWei = ethers.parseEther(amountADesired);
    const amountBDesiredWei = ethers.parseEther(amountBDesired);
    const slippageFactor = 1 - slippageTolerance / 100;
    const amountAMin = (amountADesiredWei * BigInt(Math.floor(slippageFactor * 1000))) / BigInt(1000);
    console.log(amountADesiredWei, ">>>>>>", amountAMin);
    const amountBMin = (amountBDesiredWei * BigInt(Math.floor(slippageFactor * 1000))) / BigInt(1000);
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
    console.log("--------->>>>>>>>>>>>", deadline);

    try {
      console.log("Checking balances...");
      const balanceA = await tokenAContract.balanceOf(address);
      const balanceB = await tokenBContract.balanceOf(address);
      if (balanceA < ethers.parseEther(amountADesired) || balanceB < ethers.parseEther(amountBDesired)) {
          throw new Error("Insufficient balance for adding liquidity");
      }
      console.log("sufficient balance");


      // Check allowance for Token A and Token B
      const allowanceA = await tokenAContract.allowance(address, routerAddress);
      console.log("Allowance for Token A:", ethers.formatEther(allowanceA));
      const allowanceB = await tokenBContract.allowance(address, routerAddress);
      console.log("Allowance for Token B:", ethers.formatEther(allowanceB));
      // Approve token transfers
      const txA = await tokenAContract.approve(routerAddress, amountADesiredWei);
      await txA.wait();
      console.log("Token A approved");

      const txB = await tokenBContract.approve(routerAddress, amountBDesiredWei);
      await txB.wait();
      console.log("Token B approved");

      // Add Liquidity
      const tx = await router.addLiquidity(
        tokenAAddress,
        tokenBAddress,
        amountADesiredWei,
        amountBDesiredWei,
        amountAMin,
        amountBMin,
        address,
        deadline,
        { gasLimit: 300000}
      );

      const receipt = await tx.wait();
      console.log('Liquidity addded successfully:', receipt.transactionHash);
      return receipt.transactionHash;
    } catch (error) {
      console.log('Error adding liquidity:', error);
      throw error;
    }
  }, []);

  return addLiquidity;
};
