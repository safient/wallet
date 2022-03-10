import { Button, Text } from 'components/primitive';
import { StyledDiv, StyledImage } from './wallet-status.styles';

export const NoAccess = () => {
  return (
    <>
      <StyledDiv>
        <StyledImage name='lock' />
        <Text variant='small' text='Wallet is not yet accessible' color='textLighter' />
      </StyledDiv>
      <Button label={{ text: 'Claim' }} variant='primary' color='primaryGradient' onClick={() => 'clicked'} />
    </>
  );
};
