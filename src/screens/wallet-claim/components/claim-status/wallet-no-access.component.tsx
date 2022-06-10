import { Button, GenericModal, NoticeLoader, Text } from 'components/primitive';
import { observer } from 'mobx-react-lite';
import { StyledDiv, StyledImage } from './wallet-status.styles';

export const NoAccess = observer(({ claiming, setClaiming, confirm, setConfirm, createClaim }: any) => {
  return (
    <>
      {confirm && (
        <GenericModal
          show={confirm}
          onSubmit={createClaim}
          onClose={() => {
            setConfirm(false);
          }}
        >
          <StyledDiv>
            <StyledImage name='warningIndicator' />
            <Text variant='small' tx='walletClaimPage.claimConfirm' color='textLighter' center />
          </StyledDiv>
        </GenericModal>
      )}
      <StyledDiv>
        {claiming && (
          <NoticeLoader
            label={{ tx: 'walletClaimPage.claiming' }}
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
        onClick={() => {
          setConfirm(true);
        }}
      />
    </>
  );
});
