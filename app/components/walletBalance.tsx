import { useReadContracts } from 'wagmi';
import { USDCAbi } from '../abi/USDCAbi';
import { KStarAbi } from '../abi/KStarAbi';
import { useAccount } from 'wagmi';

const USDCAddress = '0x10d23DD4a43E70BD73fA6dde068A502bbD4Dd089';
const KStarAddress = '0xcAB3b0A593007035c13faf968444595826F3A3af';

export default function WalletBalance() {
    const { address } = useAccount();

    const { data, isLoading, isError } = useReadContracts({
        contracts: [
            {
                abi: USDCAbi,
                address: USDCAddress,
                functionName: 'balanceOf',
                args: [address],
            },
            {
                abi: KStarAbi,
                address: KStarAddress,
                functionName: 'balanceOf',
                args: [address],
            },
        ],
        enabled: !!address,
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching balances</div>;

    const usdcBalance = data?.[0].result ? (BigInt(data[0].result.toString()) / BigInt(1e18)).toString() : '0';
    const kstarBalance = data?.[1].result ? (BigInt(data[1].result.toString()) / BigInt(1e18)).toString() : '0';

    return (
        <div className='px-4'>
            <div>USDC Balance: {usdcBalance}</div>
            <div>KStar Balance: {kstarBalance}</div>
        </div>
    );
}
