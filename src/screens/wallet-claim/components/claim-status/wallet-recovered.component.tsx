import { Button, Text } from 'components/primitive';
import { RoutePath } from 'navigation/route-path';
import { useHistory } from 'react-router-dom';
import { useServices } from 'services';
import { useStores } from 'store';
import { StyledDiv, StyledImage } from './wallet-status.styles';

export const Recovered = () => {
  let history = useHistory();
  const { safeService, walletService } = useServices();
  const { safeStore } = useStores();

  async function handleShowWallet() {
    safeStore.setFetching(true);
    history.push(RoutePath.walletOverview);
    const safeData = await safeService.recover(safeStore.safe?._id!, 'beneficiary');
    if (safeData.hasData()) {
      if (safeData.data?.seedPhrase) {
        await walletService.load(safeData.data?.seedPhrase);
      }
    }
    safeStore.setFetching(false);
  }

  return (
    <>
      <StyledDiv>
        <StyledImage name={'recovered'} />
        <Text variant='small' tx={'walletClaimPage.walletRecovered'} color='textLighter' />
      </StyledDiv>
      <Button
        label={{ tx: 'walletClaimPage.view' }}
        variant='primary'
        color='primaryGradient'
        onClick={handleShowWallet}
      />
    </>
  );
};
