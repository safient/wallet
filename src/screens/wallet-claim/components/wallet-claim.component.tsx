//@ts-nocheck
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useServices } from 'services';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RoutePath } from 'navigation';

import { Alert, Box, IconSvg, Text } from 'components/primitive';
import { WalletActions } from './wallet-claim-actions.component';
import { WalletClaimContainer, WalletClaimView } from './wallet-claim.component.styles';
import { walltClaimProps } from './wallet-claim.component.props';
import { BalanceContainer, BalanceInEth, BalanceInUsd } from './wallet-claim.component.styles';
import { ClaimStaus } from './wallet-claim-status.component';
import { ClaimShimmer } from './shimmer/wallet-claim-shimmer';
import { useStores } from 'store';

export const HeadingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  transform: translate(15%);
  filter: blur(4px);
`;
export const SettingsContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const WalletClaim: React.FC<walltClaimProps> = observer((props) => {
  const [claiming, setClaiming] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const [error, setError] = useState({
    hasError: false,
    errorMessage: '',
  });
  let history = useHistory();

  const { safeService, walletService } = useServices();
  const { safeStore } = useStores();
  const { shimmer } = props;
  let timestamp = 0;

  if (safeStore.safe?.claims.length) {
    timestamp = safeStore.safe?.claims[safeStore.safe?.claims.length - 1].timeStamp + safeStore.safe?.signalingPeriod;
  }

  const createClaim = async () => {
    setConfirm(false);
    setClaiming(true);
    const claim = await safeService.claim(safeStore.safe?._id!);
    setClaiming(false);
    const safe = await safeService.get(safeStore.safe?._id!);
    if (claim.hasError()) {
      const errorMessage = claim.getErrorMessage();
      setError({
        hasError: true,
        errorMessage,
      });
    }
  };

  async function handleShowWallet() {
    safeStore.setFetching(true);
    history.push(RoutePath.walletOverview);
    const safeData = await safeService.recover(safeStore.safe?._id!, 'beneficiary');
    if (safeData.hasData()) {
      if (safeData.data?.seedPhrase) {
        await walletService.load(safeData.data?.seedPhrase);
      }
    }
    if (safeData.hasError()) {
      const errorMessage = claim.getErrorMessage();
      setError({
        hasError: true,
        errorMessage,
      });
    }
    safeStore.setFetching(false);
  }

  return (
    <>
      {shimmer ? (
        <ClaimShimmer />
      ) : (
        <WalletClaimContainer>
          <Box marginTop={2}>
            <Box hCenter vCenter marginBottom={1}>
              {error.hasError && <Alert label={{ text: error.errorMessage }} variant={'error'} icon />}
            </Box>
            <Text variant='title' text={safeStore.safe?.safeName} color='textLight' />
          </Box>
          <WalletClaimView padding={6} hCenter vCenter color='white' marginTop={2}>
            <HeadingContainer>
              <Box row hCenter vCenter gap={1}>
                <Text variant='small' text='0xd5B5...7C3b81B' color='textLight' />
              </Box>
              <Box vCenter align={'end'}>
                <IconSvg name='settings' />
              </Box>
            </HeadingContainer>
            <Box hCenter vCenter marginTop={4}>
              <BalanceContainer gap={2} hCenter vCenter>
                <BalanceInUsd variant='title' text='$1500.34' color='textLight' />
                <BalanceInEth variant='small' text='0.51ETH' color='textLighter' />
              </BalanceContainer>
            </Box>
            <Box marginTop={7}>
              <WalletActions />
            </Box>
            <ClaimStaus
              status={safeStore.safe?.stage!}
              timestamp={timestamp}
              claimType={safeStore.safe!.claimType}
              claiming={claiming}
              confirm={confirm}
              setConfirm={setConfirm}
              createClaim={createClaim}
              handleShowWallet={handleShowWallet}
            />
          </WalletClaimView>
        </WalletClaimContainer>
      )}
    </>
  );
});
