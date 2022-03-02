import React from 'react';
import { Link } from 'react-router-dom';
import { Box, IconSvg, Text } from 'components/primitive';
import { WalletCard } from './components/wallet-card/wallet-card.component';
import { HomeScreenContainer, Title, CardsContainer, SafeCard, SafeText } from './home.screen.styles';

import { RoutePath } from 'navigation/route-path';

export const HomeScreen: React.FC = () => {
  return (
    <HomeScreenContainer>   
      <Title variant='contentHeader' tx='common.wallets' />

        <Box hCenter>
        <CardsContainer row hCenter> 
          <SafeCard hCenter vCenter>
            <Link to={RoutePath.createWallet}>
              <IconSvg name='add' size='xLarge' />
            </Link>
            <SafeText variant='content' tx='common.createWallet' />
          </SafeCard>
Z
          {/* <WalletCard walletName='Wallet 1' roleName='Creator' status='active' />
          <WalletCard walletName='Wallet 2' roleName='Beneficiary' status='locked' />
          <WalletCard walletName='Wallet 3' roleName='Beneficiary' status='pending' /> */}
        </CardsContainer>     
      </Box>
    </HomeScreenContainer>
  );
};
