import { useReadContract, UseReadContractReturnType } from 'wagmi';
import { USDCAbi } from '../abi/USDCAbi';

const USDCAddress = '0x10d23DD4a43E70BD73fA6dde068A502bbD4Dd089';

export default function WalletBalance() {
    const result: UseReadContractReturnType<typeof USDCAbi, 'totalSupply'> = useReadContract({
        abi: USDCAbi,
        address: USDCAddress,
        functionName: 'totalSupply'
    });

    if (result.isLoading) return <div>Loading...</div>;
    if (result.isError) return <div>Error: {result.error.message}</div>;
    const totalSupply = result.data? (BigInt(result.data) / BigInt(1e18)).toString() : '0';

    return (
        <div className='px-4'>
            Total Supply: {totalSupply}
        </div>
    );
}
