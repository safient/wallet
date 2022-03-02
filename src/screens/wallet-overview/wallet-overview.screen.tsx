import { Box, IconSvg, Text } from 'components/primitive';
import { WalletActions } from './components/wallet-actions.component';
import { Activities } from './components/wallet-activities.component';
import {
  BalanceContainer,
  BalanceInEth,
  BalanceInUsd,
  WalletOverViewContainer,
  WalletOverView,
} from './wallet-overview.screen.styles';

export const WalletOverviewScreen = () => {
  return (
    <WalletOverViewContainer>
      <Box marginTop={2}>
        <Text variant='title' text='Wallet 1' color='textLight' />
      </Box>
      <WalletOverView padding={6} hCenter vCenter color='white' marginTop={2}>
        <Box>
          <Box align={'end'}>
            <IconSvg name='settings' />
          </Box>
          <Box hCenter vCenter marginTop={1.8}>
            <Text variant='small' text='0xf2c3...6981C8b6853A' />

            <BalanceContainer gap={2} marginTop={3} hCenter vCenter>
              <BalanceInUsd variant='title' text='$1500.34' />
              <BalanceInEth variant='small' text='0.51ETH' color='textLight' />
            </BalanceContainer>
          </Box>
          <Box marginTop={7}>
            <WalletActions />
          </Box>

          <Box>
            <Activities />
          </Box>
        </Box>
      </WalletOverView>
    </WalletOverViewContainer>
  );
};
