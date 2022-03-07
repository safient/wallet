import { useHistory } from 'react-router-dom';
import { RoutePath } from 'navigation/route-path';
import { Header } from 'components/common/auth-header.component';
import { Box, Button, Image, Text } from 'components/primitive';
import { WelcomeContainer, Title } from './landing-page.screen.styles';

export const WelcomeScreen = () => {
  let history = useHistory();

  const redirectToLogin = () => {
    history.push(RoutePath.login);
  };

  return (
    <>
      <Header />
      <WelcomeContainer hCenter vCenter>
        <Box hCenter vCenter marginTop={8}>
          <Image width={41.7} name='landingPage' />
        </Box>
        <Box hCenter vCenter marginTop={2}>
          <Box gap={0.8} hCenter vCenter marginBottom={1.8}>
            <Title variant='title' tx='welcomePage.heading' />
            <Text variant='small' tx='welcomePage.subHeading' />
          </Box>
          <Button
            variant='primary'
            label={{ tx: 'auth.getStarted' }}
            onClick={redirectToLogin}
            color='primaryGradient'
          />
        </Box>
      </WelcomeContainer>
    </>
  );
};
