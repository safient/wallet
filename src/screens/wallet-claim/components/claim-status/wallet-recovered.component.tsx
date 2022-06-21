import { Button, Text } from 'components/primitive';

import { StyledDiv, StyledImage } from './wallet-status.styles';

export const Recovered = (props: any) => {
  const { handleShowWallet } = props;
  return (
    <>
      <StyledDiv>
        <StyledImage name={'recovered'} />
        <Text variant='small' tx={'walletClaimPage.walletRecovered'} color='textLighter' center />
      </StyledDiv>
      <Button
        label={{ tx: 'walletClaimPage.view' }}
        variant='primary'
        color='primaryGradient'
        onClick={handleShowWallet}
      />
    </>
  );
};
