import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Text, Input, NoticeLoader } from 'components/primitive';
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
} from './login.screen.styles';

export const LoginScreen = () => {

  const { accountService, magiclinkService } = useServices();
  const { accountStore } = useStores();
  let history = useHistory();  
  const [signingIn, setSigningIn] = useState(false)
  const [email, setEmail] = useState(null);
  const providers = ['google', 'github']


  const handleMagicLogin = async () => {
    try{
      setSigningIn(true);
      const res = await magiclinkService.loginWithEmail('yathish78699@gmail.com')
      if(res.data){
        console.log('enters if')
        history.push(RoutePath.home)
      }else{
        history.push(RoutePath.register)      
      }
      setSigningIn(false)
    }catch(e){
      console.log(e)
    }
  }

  const handleMagicSocialLogin = async () => {
    try{
      setSigningIn(true);
      const res = await magiclinkService.loginWithSocial("google")
      if(res.data){
        console.log('enters if')
        history.push(RoutePath.home)
      }else{
        history.push(RoutePath.register)      
      }
      setSigningIn(false)
    }catch(e){
      console.log(e)
    }
  }

  // const handleEmailInput = (e: Event) => {
  //     setEmail(e.target.value)
  // }
  const login = async () => {
    try {
    setSigningIn(true)  
    const account = await accountService.login();
    if (account.hasData()) {
    history.push(RoutePath.home);
    } else {

    accountStore.setError(account.getErrorMessage(), account.getErrorCode())
    history.push(RoutePath.register);
    }
    setSigningIn(false)
  }
  
  catch(e) {
    console.log(e)
  }
}

  return (
    <LoginContainer>
      <Header />

      <LoginFormContainer>
       { signingIn && <NoticeLoader label={{tx:'common.signingInLabel'}} helperText={{text: "Please sign the signature on MetaMask. This may take a couple of seconds ..."}}/>  }
        <FormContainer>
          <LoginText variant='contentHeader' center tx='auth.getStarted' />
          <Input type='text' label='Enter your Email or DID' placeholder='hello@example.com' />

          <StyledButton
            variant='primary'
            label={{ tx: 'auth.login' }}
            onClick={handleMagicLogin}
            color='primaryGradient'
          />

          <SocialLoginContainer>
            <TextContainer>
              <Text variant='contentHeader' center tx='common.or' />
              <Text variant='contentHeader' center tx='common.alternativeOption' />
            </TextContainer>

            <SocialIconsContainer>
              <SocialIcon name='loginWithGitHub' height={5} width={7} />
              <SocialIcon name='loginWithGoogle' height={5} width={7}  onClick={handleMagicSocialLogin}/>
              <SocialIcon name='loginWithMetaMask' height={5} width={7} onClick={login} />
            </SocialIconsContainer>
          </SocialLoginContainer>
        </FormContainer>
      </LoginFormContainer>
    </LoginContainer>
  );
};