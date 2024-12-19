'use client';
import { WalletBallance } from "@/components/walletBalance";
import { useAccount } from "wagmi";

export default function WalletBallancePage() {
  const { isConnected } = useAccount();

  return (
    <div className="container relative flex flex-wrap items-center justify-center p-8 mt-24 mx-auto shadow rounded">
      <div className="w-full">
        <h3 className="text-5xl font-semibold tracking-tight text-gray-700 sm:text-4xl text-center m-8">Wallet Ballance</h3>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {isConnected? <WalletBallance/> : ''}
      </div>
    </div>
  );
}

