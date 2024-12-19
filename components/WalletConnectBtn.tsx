'use client';

import ConnectButton from "./wallet-modal";
import { useAccount } from "wagmi";
import { Account } from './account';
// import { WalletBallance } from "./WalletBalance";

export default function WalletConnectBtn() {
  const { isConnected } = useAccount();
  return (

    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex">
        <ConnectButton text={isConnected? 'Connected': 'Connect Wallet'}/>
        {isConnected? <Account/>: ''}
        {/* {isConnected? <WalletBallance/>: ''} */}
    </div>

  );
}
