'use client';

import Button from "@/components/Button";
import InputStyle from "@/components/InputStyle";


export default function Pool() {
  return (
    <div className="container relative flex flex-wrap items-center justify-center p-8 mt-24 mx-auto shadow rounded">
      <div className="w-full">
        <h3 className="text-5xl font-semibold tracking-tight text-gray-700 sm:text-4xl text-center m-8">Pool</h3>
      </div>
      <div className="w-80 p-4">
        <InputStyle tokenName = "Mock USDC" symbol = "USDC"/>
      </div>
      <div className="w-80 p-4">
        <InputStyle tokenName = "Mock KStar" symbol = "ksr"/>
      </div>
      <div className="flex w-full items-center justify-center m-8">
        <Button text = "Add Liquidity"/>
      </div>
    </div>
  );
}
