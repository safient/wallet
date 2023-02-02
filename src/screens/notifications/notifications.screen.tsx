import { useState } from 'react';
import { t } from 'i18n-js';
import { IconSvg, Text, Box, EmptyState, GenericModal, NoticeLoader } from 'components/primitive';
import {
  NotificationsContainer,
  Notifications,
  Activities,
  StyledButton,
  StyledDiv,
  StyledImage,
  WalletName,
  NotificationText,
  InfoContainer,
} from './notifications.screen.styles';
import { useStores } from 'store';
import { useServices } from 'services';
import { useHistory } from 'react-router-dom';

export const NotificationsScreen: React.FC = () => {
  const history = useHistory();
  const { safeStore } = useStores();
  const { safeService } = useServices();
  const [confirm, setConfirm] = useState(false);
  const [canceling, setCanceling] = useState(false);

  let timestamp = 0;

  if (safeStore.safe?.claims.length) {
    timestamp = safeStore.safe?.claims[safeStore.safe?.claims.length - 1].timeStamp + safeStore.safe?.claim.period;
  }

  const handleCancelClaim = async () => {
    setConfirm(false);
    setCanceling(true);
    await safeService.signal(safeStore.safe?._id!);
    setCanceling(false);
  };

  const backButtonHandler = () => {
    history.goBack();
  };

  return (
    <NotificationsContainer>
      {confirm && (
        <GenericModal
          show={confirm}
          onSubmit={handleCancelClaim}
          onClose={() => {
            setConfirm(false);
          }}
        >
          <StyledDiv>
            <StyledImage name='warningIndicator' />
            <Text variant='small' tx='notifications.cancelConfirm' color='textLighter' center className='heading' />
          </StyledDiv>
        </GenericModal>
      )}

      {canceling && (
        <NoticeLoader
          label={{ tx: 'notifications.cancelClaim' }}
          helperText={{
            text: 'Canceling the claim. Please wait for the transaction to get confirmed...',
          }}
        />
      )}
      <Box marginTop={2} onClick={() => (window.location.href = safeStore.safe?.cid!)}>
        <WalletName variant='title' text={safeStore.safe?.safeName} color='textLight' className='title' />
      </Box>

      <Notifications>
        <Box row vCenter>
          <Box onClick={backButtonHandler} flex={1} marginTop={0.3}>
            <IconSvg name='arrowLeft' />
          </Box>
          <Box flex={5} vCenter>
            <NotificationText variant='contentHeader' center tx='notifications.notification' />
          </Box>
        </Box>
        <Box marginTop={3.2}>
          {safeStore.safe?.claims.length ? (
            safeStore.safe?.claims.map((claim) => (
              <Activities>
                <IconSvg name='document' size='xLarge' />

                <InfoContainer>
                  <Text variant='small' tx='notifications.claimingText' color='textLight' className='text' />
                  <Text
                    variant='small'
                    text={`Respond by  ${new Date(timestamp * 1000).toUTCString()}`}
                    color='textLighter'
                    className='text'
                  />
                </InfoContainer>

                <StyledButton
                  row
                  hCenter
                  vCenter
                  gap={0.4}
                  color='applicationBackground'
                  onClick={() => {
                    setConfirm(true);
                  }}
                >
                  <IconSvg name='delete' />
                  {t('notifications.cancelClaim')}
                </StyledButton>
              </Activities>
            ))
          ) : (
            <EmptyState label={{ tx: 'emptyStates.emptyActivities' }} image={{ name: 'emptyActivity' }} />
          )}
        </Box>
      </Notifications>
    </NotificationsContainer>
  );
};
