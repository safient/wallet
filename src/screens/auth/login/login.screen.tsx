import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Text, Input, NoticeLoader, Box, Alert } from 'components/primitive';
import { Header } from 'components/common/auth-header.component';
import { RoutePath } from '../../../navigation/route-path';
import { useServices } from 'services';
import { useStores } from 'store';
import {
  LoginContainer,
  LoginFormContainer,
  LoginText,
  FormContainer,
  StyledButton,
  SocialLoginContainer,
  TextContainer,
  SocialIconsContainer,
  SocialIcon,
  EmailContainer,
} from './login.screen.styles';
import { OAuthProvider } from '@magic-ext/oauth';
import { observer } from 'mobx-react-lite';

export const LoginScreen = observer(() => {
  const { accountService, magiclinkService } = useServices();
  const { accountStore } = useStores();
  const [signingIn, setSigningIn] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState({
    hasError: false,
    errorMessage: '',
  });
  let history = useHistory();

  const handleEmailLogin = async () => {
    try {
      setSigningIn(true);
      const res = await magiclinkService.loginWithEmail(email);
      setSigningIn(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSocialLogin = async (provider: OAuthProvider) => {
    try {
      setSigningIn(true);
      const res = await magiclinkService.loginWithSocial(provider);
    } catch (e) {
      console.log(e);
    }
  };

  const handleWalletLogin = async () => {
    try {
      setSigningIn(true);
      const account = await accountService.login(true);
      if (account.hasData()) {
        history.push(RoutePath.home);
      } else {
        accountStore.setError(account.getErrorMessage(), account.getErrorCode());
        history.push(RoutePath.register);
      }
      if (account.hasError()) {
        const errorMessage = account.getErrorMessage();

        setError({
          hasError: true,
          errorMessage: 'Something went wrong while Signing In. Please try again',
        });
      }

      setSigningIn(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LoginContainer>
      <Header />

      <LoginFormContainer>
        {signingIn && (
          <NoticeLoader
            label={{ tx: 'common.signingInLabel' }}
            helperText={{ text: 'Please sign the signature on MetaMask. This may take a couple of seconds ...' }}
          />
        )}

        <FormContainer>
          {error.hasError && (
            <Box hCenter vCenter marginTop={-2} marginBottom={2}>
              {' '}
              <Alert label={{ text: error.errorMessage }} variant={'error'} icon />{' '}
            </Box>
          )}
          <LoginText variant='contentHeader' center tx='auth.getStarted' />
          <EmailContainer>
            <Input
              type='text'
              label='Enter your Email'
              placeholder='hello@safient.com'
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </EmailContainer>

          <StyledButton
            variant='primary'
            label={{ tx: 'auth.login' }}
            onClick={handleEmailLogin}
            color='primaryGradient'
          />

          <SocialLoginContainer>
            <TextContainer>
              <Text variant='contentHeader' center tx='common.or' />
              <Text variant='contentHeader' center tx='common.alternativeOption' />
            </TextContainer>

            <SocialIconsContainer>
              <SocialIcon
                name='loginWithGitHub'
                height={5}
                width={7}
                onClick={() => {
                  handleSocialLogin('github');
                }}
              />
              <SocialIcon
                name='loginWithGoogle'
                height={5}
                width={7}
                onClick={() => {
                  handleSocialLogin('google');
                }}
              />
              <SocialIcon name='loginWithMetaMask' height={5} width={7} onClick={handleWalletLogin} />
            </SocialIconsContainer>
          </SocialLoginContainer>
        </FormContainer>
      </LoginFormContainer>
    </LoginContainer>
  );
});
