import { Box, IconSvg } from 'components/primitive';
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
  AddIconContainer,
} from './wallet-settings.screen.styles';

export const WalletSettingsScreen = ({ history }: any) => {
  const backButtonHandler = () => {
    history.goBack();
  };

  const { safeStore } = useStores();

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
            <Label>Add a beneficiary</Label>
            <AddIconContainer align={'end'}>
              <IconSvg name='add' size='large' />
            </AddIconContainer>
          </BeneficiaryContainer>
          <Box marginTop={-2} marginBottom={1.2}>
            <StyledInput type='text' placeholder='johndoe@safeint.com' />
          </Box>

          <Label>Advanced options</Label>
          <Box row hCenter marginTop={-2} justify={'between'}>
            <Label>Signaling Period</Label>
            <SignnalingInput type='text' placeholder='10 days' />
          </Box>
        </WalletSettingsFormBox>

        <StyledButton variant='primary' label={{ text: 'Save' }} onClick={() => ''} color='primaryGradient' />
      </FormContainer>
    </WalletSettingsFormContainer>
  );
};
