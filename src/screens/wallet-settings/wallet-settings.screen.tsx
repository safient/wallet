import { Accordion, Box, DateTimePicker, DropDown, IconSvg } from 'components/primitive';
import { useState } from 'react';
import { WalletName } from 'screens/wallet-overview/components/wallet-overview.component.styles';
import { useStores } from 'store';
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

export const WalletSettingsScreen = ({ history }: any) => {
  const [date1, setDate1] = useState(null);
  const [selectNetwork, setSelectNetwork] = useState('kovan');

  const backButtonHandler = () => {
    history.goBack();
  };

  const { safeStore } = useStores();

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
          <StyledInput type='text' label='Wallet Name' placeholder='A test Wallet' />

          <BeneficiaryContainer>
            <Label> Wallet Beneficiary</Label>
          </BeneficiaryContainer>
          <Box marginTop={-2} marginBottom={1.2}>
            <StyledInput type='text' placeholder='johndoe@safeint.com' />
          </Box>

          <Accordion label='Advanced Options'>
            <Box row hCenter marginTop={2} justify={'between'}>
              <Label>Signaling Period</Label>
              <SignnalingInput type='text' placeholder='10 days' />
            </Box>
            <Box marginTop={2}>
              <DropDown
                placeholder='select network'
                label='Select Network'
                options={networkOptions}
                onChange={(e: any) => safeStore.setWalletNetwork(e.value)}
              />
              <DateTimePicker
                label='Select DDay Date'
                placeholder='DDay Date'
                value={date1}
                onChange={(date1: any) => setDate1(date1)}
              />
            </Box>
          </Accordion>
        </WalletSettingsFormBox>

        <StyledButton variant='primary' label={{ text: 'Save' }} onClick={() => ''} color='primaryGradient' />
      </FormContainer>
    </WalletSettingsFormContainer>
  );
};
