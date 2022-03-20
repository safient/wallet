import { Box, IconSvg, Text } from 'components/primitive';
import { useState, useEffect } from 'react';
import { StyledDiv, StyledGif, DisabledButton } from './wallet-status.styles';

export const Recovering = (props: any) => {

  const { timestamp } = props;
  const recoveryInterval =  Math.ceil(timestamp - new Date().getTime()/1000)

  const [seconds, setSeconds] = useState(recoveryInterval > 0 ? recoveryInterval : 0);
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
        <StyledGif name={'recovering'} />

        { recoveryInterval > 0 ?
        <>
        <Text variant='small' text={`Wallet will begin recovery at ${new Date(timestamp*1000).toUTCString()} if the claim passes`} color='textLighter' center />
        <Text variant='small' tx={'walletClaimPage.walletRecoversIn'} color='textLighter' /> 
        </>
          :
        <Text variant='small' text={'Guardians are recovering the wallet. It should take only a few mins. Sit back and have a cup of ☕️'} color='textLighter' center />   
        }

      </StyledDiv>
      <Box row hCenter vCenter gap={1} marginBottom={2.4}>
        {!claimable && (
          <>
            <IconSvg name='time' />
            <Box hCenter vCenter row gap={0.4}>
              <Text variant='small' text={`${Math.floor(seconds/60)} min`} color='textLight' bold600 />
              :<Text variant='small' text={`${seconds%60} sec`} color='textLight' bold600 />
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
    </>
  );
};
