'use client';
import Button from "@/app/components/Button";
import InputStyle from "@/app/components/InputStyle";
import RadioGroup from "@/app/components/RadioGroup";
import { useState } from 'react';
import { useAddLiquidity } from "./lib/addliquidity";


export default function Home() {
  const [usdcValue, setUsdcValue] = useState('');
  const [ksrValue, setKsrValue] = useState('');
  const tokenAAddress = '0x10d23DD4a43E70BD73fA6dde068A502bbD4Dd089';
  const tokenBAddress = '0xcAB3b0A593007035c13faf968444595826F3A3af';
  const slipPageTolerance = 5;
  const addLiquidity = useAddLiquidity();
  const handleAddLiquidity = () => {
    addLiquidity(tokenAAddress, tokenBAddress, usdcValue, ksrValue, slipPageTolerance);
    console.log('---- ran AddLiquidity ------');
  }

  return (
    <div className="container relative flex flex-wrap items-center justify-center p-8 mt-24 mx-auto shadow rounded">
      <div className="w-full">
        <h3 className="text-7xl font-semibold tracking-tight text-gray-700 sm:text-4xl text-center m-8">Add Liquidity</h3>
      </div>
      <div className="w-80 p-4">
        <InputStyle 
          tokenName = "Mock USDC Token" 
          symbol = "USDC"
          value = {usdcValue}
          onChange = {setUsdcValue}
          />
      </div>
      <div className="w-80 p-4">
        <InputStyle 
          tokenName = "Mock KStar Token" 
          symbol = "ksr"
          value = {ksrValue}
          onChange = {setKsrValue}
          />
      </div>
      <div className="w-80 p-4">
        <RadioGroup/>
      </div>
      <div className="flex w-full items-center justify-center m-8">
        <Button text = "Add Liquidity" onClick={handleAddLiquidity} />
      </div>
    </div>
  );
}
