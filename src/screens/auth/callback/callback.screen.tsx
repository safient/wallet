import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { NoticeLoader} from 'components/primitive';
import { RoutePath } from '../../../navigation/route-path';
import {useServices } from 'services';
import { useStores } from 'store';
// import { magic, web3provider } from 'utils/magic';

export const CallBackScreen = (props: any) => {

  const { accountService, magiclinkService } = useServices();
  const { accountStore } = useStores();
  let history = useHistory();  

  useEffect(() =>{

    let provider =new URLSearchParams(props.location.search).get('provider');  
    
    provider? finishSocialLogin() : finishEmailRedirection()
  }, [props.location.search])

  const finishSocialLogin = async () => {
    try {
    let result = await magiclinkService.magic.oauth.getRedirectResult();
    if(result) {
        accountStore.setUserInfo(
        result.oauth.userInfo.name!,
        result.oauth.userInfo.email!
        ) 
      }
      const res = await magiclinkService.authenticateWithServer(result.magic.idToken)
      await accountService.loadAccount(magiclinkService.web3Provider)
      const account = await accountService.login()
      if (account.hasData()) {
        history.push(RoutePath.home);
        } else {
    
          accountStore.setError(account.getErrorMessage(), account.getErrorCode())
        history.push(RoutePath.register);
        }
    }catch(e) {
      console.log(e)
    }
  }
  
  const finishEmailRedirection = async () => {
    try {
    let magicCredential = new URLSearchParams(props.location.search).get('magic_credential');
    if(magicCredential){
      const didToken = await magiclinkService.magic.auth.loginWithCredential();
      const res = await magiclinkService.authenticateWithServer(didToken!)
      await accountService.loadAccount(magiclinkService.web3Provider)
      const account = await accountService.login()
      if (account.hasData()) {
        history.push(RoutePath.home);
        } else {
    
        accountStore.setError(account.getErrorMessage(), account.getErrorCode())
        history.push(RoutePath.register);
        }
    }
  }
  catch(e) {
    console.log(e)
  }
}

  return (
     <NoticeLoader label={{tx:'common.signingInLabel'}} helperText={{text: "Please wait while we load your account details. This may take a couple of seconds ..."}}/>
     
       
  );
};