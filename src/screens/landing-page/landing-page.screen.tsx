import { Box, Button, Image, Text } from 'components/primitive';

import { WelcomeContainer, Title } from './landing-page.screen.styles';

export const WelcomeScreen = () => {
  return (
    <WelcomeContainer hCenter vCenter>
      <Box hCenter vCenter marginTop={6}>
        <Image width={41.7} name='landingPage' />
      </Box>
      <Box hCenter vCenter>
        <Box gap={0.8} hCenter vCenter>
          <Title variant='title' text='Non custodial claimable wallets' />
          <Text variant='small' text='A crypto wallet solution for easy self recovery and inheritance' />
        </Box>
        <Button variant='primary' label={{ text: 'Get Started' }} onClick={() => 'clicked'} color='primaryGradient' />
      </Box>
    </WelcomeContainer>
  );
};
