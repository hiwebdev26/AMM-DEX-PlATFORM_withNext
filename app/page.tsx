import Button from "@/app/components/Button";
import InputStyle from "@/app/components/InputStyle";
import RadioGroup from "@/app/components/RadioGroup";


export default function Home() {
  return (
    <div className="container relative flex flex-wrap items-center justify-center p-8 mt-24 mx-auto shadow rounded">
      <div className="w-full">
        <h3 className="text-7xl font-semibold tracking-tight text-gray-700 sm:text-4xl text-center m-8">Add Liquidity</h3>
      </div>
      <div className="w-80 p-4">
        <InputStyle tokenName = "Mock USDC Token" symbol = "USDC"/>
      </div>
      <div className="w-80 p-4">
        <InputStyle tokenName = "Mock KStar Token" symbol = "ksr"/>
      </div>
      <div className="w-80 p-4">
        <RadioGroup/>
      </div>
      <div className="flex w-full items-center justify-center m-8">
        <Button text = "Add Liquidity"/>
      </div>
    </div>
  );
}
