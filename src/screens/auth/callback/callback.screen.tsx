import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Box} from 'components/primitive';
import { Header } from 'components/common/auth-header.component';
import { RoutePath } from '../../../navigation/route-path';
import {useServices } from 'services';
import { useStores } from 'store';
import { magic } from 'utils/magic';

export const CallBackScreen = (props: any) => {

  const { accountService, magiclinkService } = useServices();
  let history = useHistory();  

  useEffect(() =>{
    let provider =new URLSearchParams(props.location.search).get('provider');
    provider? finishSocialLogin() : finishEmailRedirection()
  }, [props.location.search])

  const finishSocialLogin = async () => {
    try {
    let result = await magic.oauth.getRedirectResult();
      const res = await magiclinkService.authenticateWithServer(result.magic.idToken)
      if(res.data === 200){
        history.push(RoutePath.home)
      }
    }catch(e) {
      console.log(e)
    }
  }
  
  const finishEmailRedirection = async () => {
    try {
    let magicCredential = new URLSearchParams(props.location.search).get('magic_credential');
    if(magicCredential){
      const didToken = await magic.auth.loginWithCredential();
      const res = await magiclinkService.authenticateWithServer(didToken!)
      if(res.data === 200){
        history.push(RoutePath.home)
      }
    }
  }
  catch(e) {
    console.log(e)
  }
}

  return (
    <Box  loading={true}/>
     
       
  );
};