import { observer } from 'mobx-react-lite';
import { useStores } from 'store';
import { WalletOverview } from './components/wallet-overview.component';

export const WalletOverviewScreen =  observer(() => {

  const { safeStore } = useStores();


  return (
    <>
      <WalletOverview shimmer={safeStore.fetching}/>
    </>
  );
});
