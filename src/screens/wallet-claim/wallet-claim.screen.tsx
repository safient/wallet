import { observer } from 'mobx-react-lite';
import { useStores } from 'store';
import { WalletClaim } from './components/wallet-claim.component';

export const WalletClaimScreen = observer(() => {

  const { safeStore } = useStores()
  

  return (
    <>
      <WalletClaim shimmer={safeStore.fetching}/>
    </>
  );
});
