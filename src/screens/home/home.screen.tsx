import React from 'react';
import { Link } from 'react-router-dom';
import { Box, IconSvg, Text } from 'components/primitive';
import { WalletCard } from './components/wallet-card/wallet-card.component';
import { UserRole } from './components/wallet-card/wallet-card.component.props';
import { HomeScreenContainer, Title, CardsContainer, SafeCard, SafeText } from './home.screen.styles';

import { RoutePath } from 'navigation/route-path';
import { useStores } from 'store';
import { WalletCardShimmer } from './components/wallet-card/wallet-card-shimmer.component';

export const HomeScreen: React.FC = () => {
  const { accountStore } = useStores();

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
          {accountStore.safientUser?.safes.map((safe) => (
            <WalletCard walletName='Sample Wallet' roleName={safe.type as UserRole} status='active' />
          ))}
        </CardsContainer>
      </Box>
    </HomeScreenContainer>
  );
};
