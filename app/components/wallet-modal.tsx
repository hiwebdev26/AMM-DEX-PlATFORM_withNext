 'use client';
 import { useWeb3Modal } from "@web3modal/wagmi/react";
 
export default function ConnectButton(props: {text: string}) {
  const { open } = useWeb3Modal();
 
  return <button onClick={() => open()} className="bg-blue-500 text-white px-4 py-2 rounded mx-2"> 
    {props.text} </button>;
}