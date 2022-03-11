import { Button, Text } from 'components/primitive';
import { StyledDiv, StyledImage } from './wallet-status.styles';

export const NoAccess = () => {
  return (
    <>
      <StyledDiv>
        <StyledImage name='lock' />
        <Text variant='small' tx='walletClaimPage.notAccessable' color='textLighter' />
      </StyledDiv>
      <Button
        label={{ tx: 'walletClaimPage.claim' }}
        variant='primary'
        color='primaryGradient'
        onClick={() => 'clicked'}
      />
    </>
  );
};
