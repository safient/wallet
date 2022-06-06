import React from 'react';
import { Link } from 'react-router-dom';
import { Enums } from '@safient/core';
import { Box, IconSvg, Alert } from 'components/primitive';
import { WalletCard } from './components/wallet-card/wallet-card.component';
import { UserRole } from './components/wallet-card/wallet-card.component.props';
import { HomeScreenContainer, Title, CardsContainer, SafeCard, SafeText, HeadingContainer } from './home.screen.styles';
import { RoutePath } from 'navigation/route-path';
import { useStores } from 'store';
import { observer } from 'mobx-react-lite';

export const HomeScreen: React.FC = observer(() => {
  const { accountStore } = useStores();

  const isValidNetwork = () => {
    if (accountStore.network === Enums.NetworkType.testnet) {
      return parseInt(accountStore.chainId.toString()) === 42;
    } else if (accountStore.network === Enums.NetworkType.devnet) {
      return parseInt(accountStore.chainId.toString()) === 31337;
    }
    return false;
  };

  const getTargetNetwork = () => {
    if (accountStore.network === Enums.NetworkType.testnet) {
      return 'Kovan Network';
    }
    if (accountStore.network === Enums.NetworkType.devnet) {
      return 'Local Network';
    }
    return 'Mainnet Network';
  };

  return (
    <HomeScreenContainer>
      <Box hCenter>
        {!isValidNetwork() && (
          <Alert variant='error' icon label={{ text: 'Please switch the wallet network to ' + getTargetNetwork() }} />
        )}

        <HeadingContainer>
          <Title variant='contentHeader' tx='common.wallets' left />
        </HeadingContainer>
        <CardsContainer row hCenter marginTop={1}>
          <SafeCard hCenter vCenter>
            <Link to={RoutePath.createWallet}>
              <IconSvg name='create' size='xLarge' />
            </Link>
            <SafeText variant='content' tx='common.createWallet' />
          </SafeCard>

          {accountStore.safientUser?.safes.map((safe) => (
            <WalletCard
              walletName={safe.safeName}
              roleName={safe.type as UserRole}
              status={safe.type === 'creator' ? 'active' : 'locked'}
              id={safe.safeId}
            />
          ))}
        </CardsContainer>
      </Box>
    </HomeScreenContainer>
  );
});
