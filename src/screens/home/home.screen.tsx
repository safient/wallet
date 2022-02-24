import React from 'react';
import { Link } from 'react-router-dom';  
import { IconSvg } from 'components/primitive';
import { HomeScreenContainer, Title, CardsContainer, SafeCard, SafeText } from './home.screen.styles';

import { RoutePath } from 'navigation/route-path';

export const HomeScreen: React.FC = () => {
  return (
    <HomeScreenContainer>
      <Title variant='contentHeader' tx='common.wallets' />
      <CardsContainer>
      
        <SafeCard hCenter vCenter>
          <Link to={RoutePath.createWallet} >
            <IconSvg name='add' size='xLarge' />
          </Link>
          <SafeText variant='content' tx='common.createWallet' /> 
        </SafeCard>
        

        {/* TODO: Render the wallet cards  */}
        {/* <SafeCard hCenter vCenter>
          <IconSvg name='add' size='xLarge' />
          <SafeText variant='content' tx='common.createSafe' />
        </SafeCard> */}

      </CardsContainer>
    </HomeScreenContainer>
  );
};
