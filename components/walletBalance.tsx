import { useBalance } from 'wagmi';
// import { BigNumber } from 'ethers';
// import { config } from '../lib/config';

export function WalletBallance() {
    const result = useBalance({
        address: '0x561a7FeeD99c1BBe134868490F2a7e169B6e2392',
        token: '0x10d23DD4a43E70BD73fA6dde068A502bbD4Dd089'
      })
    // const balance = result.data?.value ? BigNumber.from(result.data.value).div(BigNumber.from(10).pow(result.data.decimals)).toString() : '0';
    // console.log(balance, "----0----");
    const usdcBalance = result.data?.value ? 
        (BigInt(result.data.value) / BigInt(1e18)).toString() : '0';
    console.log(usdcBalance, "----0----");  

     return(
        <div className='px-4'>
            {usdcBalance}{result.data?.symbol}
        </div>
     );

}