import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useClipBoardTimer } from 'hooks/useClipboardTimer';
import { Alert, Box, IconSvg, Text } from 'components/primitive';
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
} from './wallet-overview.component.styles';

function shorternAddress(str: string) {
  let shortern = str.length > 16 ? str.substr(0, 12) : str;
  // Todo- https://jsfiddle.net/koushith/awybjek4/15/
  // let shortern = str.split('').splice(3, 20, '....').join('');
  return shortern;
}

export const WalletOverview: React.FC<walltOverViewProps> = (props) => {
  const { shimmer } = props;
  // To copy the adress, setClipboard value with the adress recieved from the response.
  const [clipboardValue, setClipboardValue] = useState('koushith97');
  const [copied, setCopied] = useState(false);

  useClipBoardTimer(copied, setCopied);

  return (
    <>
      {shimmer ? (
        <WalletOverviewShimmer />
      ) : (
        <WalletOverViewContainer>
          <Box marginTop={1}>
            {copied && <Alert variant='success' icon label={{ tx: 'walletOverViewPage.copiedSuccessfully' }} />}
          </Box>
          <Box marginTop={2}>
            <Text variant='title' text='Wallet 1' color='textLight' />
          </Box>
          <WalletOverView padding={6} hCenter vCenter color='white' marginTop={2}>
            <Box align={'end'}>
              <IconSvg name='settings' />
            </Box>
            <Box hCenter vCenter marginTop={1.8}>
              <Box row gap={1.2}>
                <Text variant='small' text={shorternAddress('0x9ccCA0a968A9bc5916E0de43Ea2D68321655ae67')} />
                <CopyToClipboard text={clipboardValue} onCopy={() => setCopied(true)}>
                  <span>
                    <IconSvg name='clipBoard' />
                  </span>
                </CopyToClipboard>
              </Box>

              <BalanceContainer gap={2} marginTop={3} hCenter vCenter>
                <BalanceInUsd variant='title' text='$1500.34' />
                <BalanceInEth variant='small' text='0.51ETH' color='textLight' />
              </BalanceContainer>
            </Box>
            <Box marginTop={7}>
              <WalletActions />
            </Box>

            <Box marginTop={7}>
              <AllActivities />
            </Box>
          </WalletOverView>
        </WalletOverViewContainer>
      )}
    </>
  );
};
