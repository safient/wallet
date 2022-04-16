import { AnimateSharedLayout, motion } from 'framer-motion';
import { GenericModal, NoticeLoader, Box, IconSvg, EmptyState, Text, Avatar } from 'components/primitive';
import { t } from 'i18n-js';
import { useHistory } from 'react-router-dom';
import {
  NotificationsContainer,
  StyledDiv,
  StyledImage,
  WalletName,
  Notifications,
  NotificationText,
  Activities,
  StyledButton,
} from './notifications.screen.styles';

export const GlobalNotification = () => {
  const history = useHistory();
  const backButtonHandler = () => {
    history.goBack();
  };

  return (
    <AnimateSharedLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <NotificationsContainer>
          <Notifications>
            <Box row vCenter>
              <Box onClick={backButtonHandler} flex={1} marginTop={0.3}>
                <IconSvg name='arrowLeft' />
              </Box>
              <Box flex={5} vCenter>
                <NotificationText variant='contentHeader' center tx='notifications.notification' />
              </Box>
            </Box>
            {/* conditional rendering- no notifications */}
            <Box marginTop={3.2}>
              <EmptyState label={{ tx: 'emptyStates.emptyActivities' }} image={{ name: 'emptyActivity' }} />
            </Box>

            <Box marginTop={0.2} padding={2}>
              {/* map this */}

              {/* <Box gap={2} row marginBottom={1}>
                <Avatar name='guarding' size='large' flat />

                <Box gap={0.2} vCenter justify={'between'}>
                  <Text
                    variant='small'
                    text='Your Benificiary has requested to clain but you dont give a damn man'
                    style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '250px' }}
                  />
                  <Text variant='small' text='5 min ago' left color='textLighter' />
                </Box>


              </Box> */}
            </Box>
          </Notifications>
        </NotificationsContainer>
      </motion.div>
    </AnimateSharedLayout>
  );
};
