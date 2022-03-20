import { Button, GenericModal, NoticeLoader, Text } from 'components/primitive';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useServices } from 'services';
import { useStores } from 'store';
import { StyledDiv, StyledImage } from './wallet-status.styles';

export const NoAccess = observer(() => {

  const [claiming, setClaiming] = useState(false)
  const [ confirm, setConfirm ] = useState(false);
  const { safeStore } = useStores()
  const { safeService } = useServices()


  const createClaim = async () => {

    setConfirm(false);
    setClaiming(true)
    const claim = await safeService.claim(safeStore.safe?._id!)
    setClaiming(false)
    const safe = await safeService.get(safeStore.safe?._id!)
  }

  return (
    <>
    {confirm && <GenericModal show={confirm} onSubmit={createClaim} onClose={()=>{setConfirm(false)}}> 
         <StyledDiv>
        <StyledImage name='warningIndicator' />
        <Text variant='small' tx='walletClaimPage.claimConfirm' color='textLighter' center />
      </StyledDiv>
      </GenericModal>
      }
      <StyledDiv>
      {claiming && (
        <NoticeLoader
          label={{ tx: "walletClaimPage.claiming" }}
          helperText={{
            text: 'Claiming the wallet. Please wait for the transaction to get confirmed...',
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
        onClick={() => {setConfirm(true)}}
      />
    </>
  );
});
