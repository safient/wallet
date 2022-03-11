import { t } from 'i18n-js';
import { Box, IconSvg } from 'components/primitive';
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

export const WalletSettingsScreen = () => {
  return (
    <WalletSettingsFormContainer>
      <FormContainer>
        <BackButtonContainer>
          <IconSvg name='arrowLeft' />
        </BackButtonContainer>
        <WalletSettingsText variant='contentHeader' center tx='common.settings' />

        <WalletSettingsFormBox>
          <StyledInput type='text' label='Wallet Name' placeholder={t('walletSettingsPage.placeHolders.walletName')} />

          <BeneficiaryContainer>
            <Label>{t('walletSettingsPage.addBeneficiary')}</Label>
            <AddIconContainer align={'end'}>
              <IconSvg name='addDark' size='large' />
            </AddIconContainer>
          </BeneficiaryContainer>
          <Box marginTop={-2} marginBottom={1.2}>
            <StyledInput type='text' placeholder={t('walletSettingsPage.placeHolders.addBeneficiary')} />
          </Box>

          <Label>{t('walletSettingsPage.advancedOptions')}</Label>
          <Box row hCenter marginTop={-2} justify={'between'}>
            <Label>{t('walletSettingsPage.signalingPeriod')}</Label>
            <SignnalingInput type='text' placeholder={t('walletSettingsPage.placeHolders.walletName')} />
          </Box>
        </WalletSettingsFormBox>

        <StyledButton variant='primary' label={{ text: 'Save' }} onClick={() => ''} color='primaryGradient' />
      </FormContainer>
    </WalletSettingsFormContainer>
  );
};
