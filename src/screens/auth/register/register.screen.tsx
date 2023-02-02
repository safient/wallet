import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { t } from 'i18n-js';
import { Text, Input, Alert, Box } from 'components/primitive';
import { observer } from 'mobx-react-lite';
import { Header } from 'components/common/auth-header.component';
import {
  RegistrationContainer,
  RegistrationFormContainer,
  RegistrationText,
  FormContainer,
  StyledButton,
  TermsContainer,
  StyledCheckbox,
  LinkText,
  RegistrationFormBox,
} from './register.screen.styles';
import { useServices } from 'services';
import { useStores } from 'store';
import { RoutePath } from 'navigation/route-path';

export const RegisterScreen = observer(() => {
  const { accountService } = useServices();
  const { accountStore } = useStores();
  let history = useHistory();

  const [fullName, setFullName] = useState(accountStore.name);
  const [email, setEmail] = useState(accountStore.email);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const register = async () => {
    try {
      accountStore.setFetching(true);
      const account = await accountService.register(fullName, email);
      if (account.hasData()) {
        history.push(RoutePath.home);
      } else {
        history.push(RoutePath.register);
      }
      if (account.hasError()) {
        const message = account.getErrorMessage();
        setErrorMessage(message);
      }
      accountStore.setFetching(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <RegistrationContainer>
      <Header />

      <RegistrationFormContainer>
        <FormContainer>
          
          <RegistrationText variant='contentHeader' center tx='auth.createAccount' />

          <RegistrationFormBox>
          {errorMessage.length > 0 ? (
            <Box hCenter vCenter marginTop={-2} marginBottom={2}>
              {' '}
              <Alert label={{ text: errorMessage }} variant={'error'} icon /> :
            </Box>
          ) : (
            <Box marginBottom={2}>
              <Alert icon variant='success' label={{ tx: 'auth.registerAlert' }} />
            </Box>
          )}

            <Input
              type='text'
              label='Enter your Full Name'
              placeholder='John Doe'
              value={fullName}
              onChange={(e: any) => {
                setFullName(e.target.value);
              }}
            />
            <Input
              type='text'
              label='Enter your Email'
              placeholder='johndoe@example.com'
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </RegistrationFormBox>
          <TermsContainer>
            <StyledCheckbox type='checkbox' onClick={() => setIsChecked(!isChecked)} />
            <Text>
              By clicking, you agree to the
              <LinkText onClick={() => (window.location.href = 'https://resources.safient.io/legal/terms')}>
                {t('auth.terms')}
              </LinkText>
              &
              <LinkText onClick={() => (window.location.href = 'https://resources.safient.io/legal/privacy')}>
                {t('auth.privacy')}
              </LinkText>
            </Text>
          </TermsContainer>
          <StyledButton
            variant='primary'
            loading={accountStore.fetching}
            label={{ text: accountStore.fetching ? 'Registering..' : "Let's Go 🚀" }}
            onClick={register}
            color='primaryGradient'
            disabled={!isChecked}
          />
        </FormContainer>
      </RegistrationFormContainer>
    </RegistrationContainer>
  );
});
