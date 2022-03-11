import { Button, Text, Box, IconSvg } from 'components/primitive';
import { useState, useEffect } from 'react';
import { DisabledButton, StyledDiv, StyledImage } from './wallet-status.styles';

export const Recover = () => {
  const [seconds, setSeconds] = useState(5);
  const [claimable, setClaimable] = useState(false);

  useEffect(() => {
    seconds > 0 &&
      setTimeout(() => {
        setSeconds((sec) => sec - 1);
      }, 1000);
    if (seconds === 0) setClaimable(true);

    return () => {
      clearTimeout();
    };
  }, [seconds]);

  return (
    <>
      <StyledDiv>
        <StyledImage name={!claimable ? 'warningIndicator' : 'recovered'} />
        <Text
          variant='small'
          tx={!claimable ? 'walletClaimPage.walletRecoversIn' : 'walletClaimPage.walletRecovered'}
          color='textLighter'
        />
      </StyledDiv>
      <Box row hCenter vCenter gap={1} marginBottom={2.4}>
        {!claimable && (
          <>
            <IconSvg name='time' />
            <Box hCenter vCenter row gap={0.4}>
              <Text variant='small' text={`${seconds}`} color='textLight' bold600 />
              <Text variant='small' text={'Sec'} color='textLight' bold600 />
            </Box>
          </>
        )}
      </Box>
      {!claimable && (
        <DisabledButton
          label={{ tx: 'walletClaimPage.view' }}
          variant='primary'
          color='primaryDisabled'
          onClick={() => 'clicked'}
        />
      )}

      {claimable && (
        <Button
          label={{ tx: 'walletClaimPage.view' }}
          variant='primary'
          color='primaryGradient'
          onClick={() => 'clicked'}
        />
      )}
    </>
  );
};
