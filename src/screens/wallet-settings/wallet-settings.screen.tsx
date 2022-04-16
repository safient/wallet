import { Accordion, Box, DropDown, IconSvg } from 'components/primitive';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { WalletName } from 'screens/wallet-overview/components/wallet-overview.component.styles';
import { useStores } from 'store';
import { useServices } from 'services';
import {
  BackButtonContainer,
  BeneficiaryContainer,
  FormContainer,
  Label,
  StyledButton,
  StyledInput,
  WalletSettingsFormBox,
  WalletSettingsFormContainer,
  WalletSettingsText,
  SignnalingInput,
} from './wallet-settings.screen.styles';

export const WalletSettingsScreen = observer(({ history }: any) => {

  const { safeStore } = useStores();
  const { walletService } = useServices();
  
  const backButtonHandler = () => {
    history.goBack();
  };

  const submitSettings = async  () => { 

    backButtonHandler();
    safeStore.setFetching(true);
    await walletService.load();
    safeStore.setFetching(false);
  
  }

  

  const networkOptions = [
    {
      value: 'mainnet',
      label: 'Ethereum Mainnet',
      
    },
    {
      value: 'kovan',
      label: 'Kovan Test Network',
    },
    {
      value: 'rinkeby',
      label: 'Rinkeby Test Network',
    },
    {
      value: 'ropsten',
      label: 'Ropsten Test Network',
    },
    {
      value: 'goerli',
      label: 'Goerli Test Network',
    },
  ];

  const getNetworkName = (network: string) => {

    return networkOptions.find(networkInfo => networkInfo.value == network)



  }

  return (
    <WalletSettingsFormContainer>
      <Box marginTop={2} onClick={() => (window.location.href = safeStore.safe?.cid!)}>
        <WalletName variant='title' text={safeStore.safe?.safeName} color='textLight' />
      </Box>

      <FormContainer>
        <BackButtonContainer onClick={backButtonHandler}>
          <IconSvg name='arrowLeft' />
        </BackButtonContainer>
        <WalletSettingsText variant='contentHeader' center text='Settings' />

        <WalletSettingsFormBox>
          <StyledInput type='text' label='Wallet Name' value={safeStore.safe?.safeName} />

          <BeneficiaryContainer>
            <Label> Wallet Beneficiary</Label>
          </BeneficiaryContainer>
          <Box marginTop={-2} marginBottom={1.2}>
            <StyledInput type='text' placeholder='johndoe@safeint.com' value={safeStore.safe?.beneficiary} />
          </Box>

          <Accordion label='Advanced Options'>
            <Box row hCenter marginTop={2} justify={'between'}>
              <Label>Signaling Period</Label>
              <SignnalingInput type='text' placeholder='10 days' />
            </Box>
            <Box marginTop={2}>
            <Label>Select Network</Label>
              <DropDown
                placeholder='select network'
                value={getNetworkName(safeStore.walletNetwork)?.label}
                options={networkOptions}
                onChange={(e: any) => safeStore.setWalletNetwork(e.value)}
              />
            </Box>
          </Accordion>
        </WalletSettingsFormBox>

        <StyledButton variant='primary' label={{ text: 'Save' }} onClick={submitSettings} color='primaryGradient' />
      </FormContainer>
    </WalletSettingsFormContainer>
  );
});
