import { Button, NoticeLoader, Text } from 'components/primitive';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useServices } from 'services';
import { useStores } from 'store';
import { StyledDiv, StyledImage } from './wallet-status.styles';

export const NoAccess = observer(() => {

  const [claiming, setClaiming] = useState(false)
  const { safeStore } = useStores()
  const { safeService } = useServices()

  const createClaim = async () => {

    setClaiming(true)
    const claim = await safeService.claim(safeStore.safe?._id!)
    setClaiming(false)
  
  }



  return (
    <>
      <StyledDiv>
      {claiming && (
        <NoticeLoader
          label={{ tx: "walletClaimPage.claiming" }}
          helperText={{
            text: 'Claiming the safe. Please wait for the transaction to get confirmed...',
          }}
        />
      )}
        <StyledImage name='lock' />
        <Text variant='small' tx='walletClaimPage.notAccessable' color='textLighter' />
      </StyledDiv>
      <Button
        label={{ tx: 'walletClaimPage.claim' }}
        variant='primary'
        color='primaryGradient'
        onClick={createClaim}
      />
    </>
  );
});
