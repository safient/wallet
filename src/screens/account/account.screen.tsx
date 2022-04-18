import { Text, Avatar, ToggleSwitch, Box, Input, IconSvg, Alert } from 'components/primitive';

import { useAlertTimer } from 'hooks/useTimer';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useStores } from 'store';
import { useServices  } from 'services';
import { AddressUtil } from 'utils/address';
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
  const { accountStore, safeStore } = useStores();
  const { safeService } = useServices()
  const [ beneficiary, setBeneficiary ] = useState(safeService.getDefaultConfig().beneficiary)
  const [ saved, setSaved ] = useState(false)
  console.log(safeService.getDefaultConfig())

  console.log(safeService.getDefaultConfig())

  useAlertTimer(saved, setSaved);

  const saveDetails = () => {

    setSaved(true);
    safeService.setDefaultConfig(beneficiary)
  }

  return (
    <AccountContainer>
      <Box marginTop={1.4}>
        <Text variant='title' tx='accountPage.account' color='textLight' />
      </Box>
      <ProfileContainer padding={6} hCenter vCenter color='white' marginTop={2}>
      { saved && <Alert variant='success' icon label={{ tx: 'accountPage.detailsSaved' }} /> }
        <Box hCenter vCenter marginTop={1.8}>
          <Avatar size='xLarge' name='user' rounded />
          <Box gap={0.4} hCenter marginTop={1}>
            <Text variant='contentHeader' color='textLight' text={accountStore.safientUser.name} />
            <Text variant='small' text={accountStore.safientUser.email} />
            <Box row gap={1.2}>
                <Text
                  variant='small'
                  text={AddressUtil.shorternAddress(accountStore.safientUser.userAddress)}
                />

                <CopyToClipboard
                  text={accountStore.safientUser.userAddress}
                  onCopy={() => {}}
                >
                  <span>
                    <IconSvg name='clipBoard' />
                  </span>
                </CopyToClipboard>
              </Box>
          </Box>
        </Box>

        <StyledDiv>
          <InfoContainer>
            <IconContainer>
              <Avatar name='safes' size='medium' flat />
            </IconContainer>
            <HeadingContainer>
              <Text variant='small' tx='accountPage.walletsTotal' />
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
            <Input type='text' label='Beneficiary' placeholder='Email of Beneficiary' value={beneficiary} onChange={(e)=>setBeneficiary(e.target.value)}/>
          </Box>
        </NotificationContainer>
        <Box marginTop={2}>
          <StyledButton variant='primary' label={{ tx: 'common.save' }} color='primaryGradient' onClick={saveDetails} />
        </Box>
      </ProfileContainer>
    </AccountContainer>
  );
};
