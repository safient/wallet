import { Text, Avatar, ToggleSwitch, Box, Input } from 'components/primitive';
import { useStores } from 'store';
import {
  StyledDiv,
  InfoContainer,
  IconContainer,
  HeadingContainer,
  CounterContainer,
  NotificationContainer,
  StyledButton,
  AccountContainer,
  ProfileContainer,
} from './account.screen.styles';

export const AccountScreen = () => {
  const { accountStore } = useStores();

  return (
    <AccountContainer>
      <Box marginTop={1.4}>
        <Text variant='title' tx='accountPage.account' color='textLight' />
      </Box>
      <ProfileContainer padding={6} hCenter vCenter color='white' marginTop={2}>
        <Box hCenter vCenter marginTop={1.8}>
          <Avatar size='xLarge' name='user' rounded />
          <Box gap={0.4} hCenter marginTop={1}>
            <Text variant='contentHeader' color='textLight' text={accountStore.safientUser.name} />
            <Text variant='small' text={accountStore.safientUser.email} />
          </Box>
        </Box>

        <StyledDiv>
          <InfoContainer>
            <IconContainer>
              <Avatar name='safes' size='medium' flat />
            </IconContainer>
            <HeadingContainer>
              <Text variant='small' tx='accountPage.walletsCreated' />
            </HeadingContainer>
            <CounterContainer>
              <Text variant='small' text={accountStore.safientUser.safes.length.toString()} />
            </CounterContainer>
          </InfoContainer>

          <InfoContainer>
            <IconContainer>
              <Avatar flat name='inherit' size='medium' />
            </IconContainer>
            <HeadingContainer>
              <Text variant='small' tx='accountPage.inherited' />
            </HeadingContainer>
            <CounterContainer>
              <Text variant='small' text={accountStore.safientUser.safes.length.toString()} />
            </CounterContainer>
          </InfoContainer>
        </StyledDiv>

        <NotificationContainer marginTop={2} borderRadius={0.5} padding={2}>
          <Text variant='contentHeader' tx='accountPage.notifications' color='textLight' />
          <Box marginTop={2}>
            <Box row justify={'between'} marginBottom={2}>
              <Text variant='content' tx='accountPage.emailNotifications' left />
              <ToggleSwitch toggleID='email' checked={true} onChange={() => 'checked'} />
            </Box>

            <Box row justify={'between'}>
              <Text variant='content' tx='accountPage.inAppNotifications' left />
              <ToggleSwitch toggleID='in-app' checked={true} onChange={() => 'checked'} />
            </Box>
          </Box>
        </NotificationContainer>

        <NotificationContainer marginTop={4} padding={2} borderRadius={0.5}>
          <Text variant='contentHeader' tx='accountPage.defaultWalletConfigs' color='textLight' />
          <Box marginTop={2}>
            <Input type='text' label='Beneficiary' placeholder='Email of Beneficiary' />
          </Box>
        </NotificationContainer>
        <Box marginTop={2}>
          <StyledButton variant='primary' label={{ tx: 'common.save' }} color='primaryGradient' onClick={() => ''} />
        </Box>
      </ProfileContainer>
    </AccountContainer>
  );
};
