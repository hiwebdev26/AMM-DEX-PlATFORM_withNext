'use client';
import Button from "@/app/components/Button";
import { useGetPrice } from "@/app/lib/getprice";

export default function Pool() {
  const getPrice = useGetPrice();
  const handleOnclick = () => {
    console.log("Get Price Button");
    getPrice();
  }

  return (
    <div className="container relative flex flex-wrap items-center justify-center p-8 mt-24 mx-auto shadow rounded">
      <div className="w-full">
        <h3 className="text-5xl font-semibold tracking-tight text-gray-700 sm:text-4xl text-center m-8">Pool</h3>
      </div>
      <div className="w-80 p-4">
        <p>Mock USDC Price: </p>
      </div>
      <div className="w-80 p-4">
        <p>Mock KStar Price: </p>
      </div>
      <div className="flex w-full items-center justify-center m-8">
        <Button text = "Get Price" onClick={handleOnclick}/>
      </div>
    </div>
  );
}
