import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { Avatar } from '../avatar/avatar.component';
import { Box } from '../box/box.component';
import { EmptyState } from '../empty-state/empty-state.component';
import { IconSvg } from '../icon-svg/icon-svg.component';
import { Image } from '../image/image.component';
import { Text } from '../text/text.component';

export const Notifications = () => {
  const history = useHistory();

  return (
    <AnimateSharedLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Box width={38} borderRadius={0.5}>
          <Text variant='contentHeader' tx='notifications.notification' center color='textLight' bold600 />

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
            <EmptyState label={{ tx: 'emptyStates.emptyActivities' }} image={{ name: 'emptyActivity' }} />
          </Box>
          {/* show this if there are n notifications */}
          {/* <Box>
            <Text
              variant='small'
              text='View All Notifications'
              center
              color='textLight'
              onClick={() => history.push('/allNotifications')}
            />
          </Box> */}
        </Box>
      </motion.div>
    </AnimateSharedLayout>
  );
};
