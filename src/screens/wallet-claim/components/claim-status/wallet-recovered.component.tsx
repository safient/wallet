import { Button, Text } from 'components/primitive';
import { StyledDiv, StyledImage } from './wallet-status.styles';

export const Recovered = () => {
  return (
    <>
      <StyledDiv>
        <StyledImage name={'recovered'} />
        <Text variant='small' tx={'walletClaimPage.walletRecovered'} color='textLighter' />
      </StyledDiv>

      <Button
        label={{ tx: 'walletClaimPage.view' }}
        variant='primary'
        color='primaryGradient'
        onClick={() => 'clicked'}
      />
    </>
  );
};
