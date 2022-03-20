import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useClipBoardTimer } from 'hooks/useClipboardTimer';
import { Alert, Box, IconSvg, Text ,Confetti} from 'components/primitive';
import { WalletOverviewShimmer } from './wallet-overview-shimmer.component';
import { WalletActions } from './wallet-actions.component';
import { AllActivities } from './wallet-activities.component';
import { walltOverViewProps } from './wallet-overview.component.props';
import {
  BalanceContainer,
  BalanceInEth,
  BalanceInUsd,
  WalletOverViewContainer,
  WalletOverView,
  AlertContainer,
  WalletName,
  IconsContainer,
} from './wallet-overview.component.styles';
import { observer } from 'mobx-react-lite';
import { useStores } from 'store';
import { AddressUtil } from 'utils/address';
import { useHistory } from 'react-router-dom';
import { RoutePath } from 'navigation/route-path';


export const WalletOverview: React.FC<walltOverViewProps> = observer((props) => {

  const history = useHistory();
  const { safeStore } = useStores();
  const { shimmer } = props;
  const [copied, setCopied] = useState(false);

  useClipBoardTimer(copied, setCopied);

  const redirectToNotifications = () => {
    history.push(RoutePath.notifications);
  };

  const redirectToSettings = () => {
    history.push(RoutePath.walletSettings);
  };

  return (
    <>
      {shimmer ? (
        <WalletOverviewShimmer />
      ) : (
        <WalletOverViewContainer>
          <AlertContainer marginTop={1}>
            {copied && <Alert variant='success' icon label={{ tx: 'walletOverViewPage.copiedSuccessfully' }} />}
          </AlertContainer>
          { safeStore.role == 'beneficiary' && <Confetti/> }
          <Box marginTop={2} onClick={() => window.open(safeStore.safe?.cid!, '_blank')}>
            <WalletName variant='title' text={safeStore.safe?.safeName} color='textLight' />
          </Box>
          <WalletOverView padding={6} hCenter vCenter color='white' marginTop={2}>
            <IconsContainer justify={'end'} row gap={1.4}>
              <span onClick={redirectToNotifications}>
                <IconSvg name={safeStore.safe?.claims.length ? 'notificationActive' : 'notificationDark'} size='medium' />
              </span>
              <span onClick={redirectToSettings}>
                <IconSvg name='settings' />
              </span>
            </IconsContainer>
            <Box hCenter vCenter marginTop={1.8}>
              <Box row gap={1.2}>
                <Text
                  variant='small'
                  text={AddressUtil.shorternAddress(safeStore.walletInfo?.address ? safeStore.walletInfo?.address : '')}
                />
                <CopyToClipboard
                  text={safeStore.walletInfo?.address ? safeStore.walletInfo?.address : ''}
                  onCopy={() => setCopied(true)}
                >
                  <span>
                    <IconSvg name='clipBoard' />
                  </span>
                </CopyToClipboard>
              </Box>

              <BalanceContainer gap={2} marginTop={3} hCenter vCenter>
                <BalanceInUsd
                  variant='title'
                  text={'$ ' + safeStore.walletInfo?.balance.usd.toString()}
                  color='textLight'
                />
                <BalanceInEth variant='small' text={safeStore.walletInfo?.balance.eth + ' ETH'} color='textLighter' />
              </BalanceContainer>
            </Box>
            <Box marginTop={7}>
              <WalletActions />
            </Box>

            <Box marginTop={7}>
              <AllActivities transactions={safeStore.walletInfo?.latestTransactions} />
            </Box>
          </WalletOverView>
        </WalletOverViewContainer>
      )}
    </>
  );
});
