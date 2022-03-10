import styled from 'styled-components';
import { Line, Square, Circle } from 'components/primitive/shimmers/shimmer-component';
import { Box, IconSvg, Text, Button } from 'components/primitive';
import { HeadingContainer } from '../wallet-claim.component';
import { WalletClaimView } from '../wallet-claim.component.styles';

export const LongLine = styled(Line)`
  width: 35rem;
`;

export const MediumLine = styled(Line)`
  width: 20rem;
`;

export const ClaimCircle = styled(Circle)`
  width: 7.4rem;
  height: 7.4rem;
`;

export const StyledButton = styled(Button)`
  background: ${({ theme: { colors } }) => colors.textDark} !important;
`;

export const ShimmerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-in-out;
  margin-top: 1.2rem;
`;

export const Actions = [
  {
    title: 'Send',
    id: 0,
  },
  {
    title: 'Recieve',
    id: 1,
  },
  {
    title: 'Trade',
    id: 2,
  },
];

export const ClaimShimmer = () => {
  return (
    <ShimmerContainer>
      <Box marginTop={2}>
        <Text variant='title' text='Wallet 1' color='textLight' />
      </Box>
      <WalletClaimView padding={6} hCenter vCenter color='white'>
        <HeadingContainer>
          <Box row hCenter vCenter gap={1}>
            <IconSvg name='coin' />
            <Text variant='title' text={'Total value'} color='textLight' />
          </Box>
          <Box vCenter align={'end'}>
            <IconSvg name='settings' />
          </Box>
        </HeadingContainer>
        <Box hCenter vCenter marginTop={4} row>
          <Box gap={2} hCenter vCenter>
            <MediumLine />
            <MediumLine />
          </Box>
        </Box>
        <Box marginTop={7}>
          <Box row gap={0}>
            {Actions.map((items) => (
              <Box hCenter vCenter gap={1} key={items.id}>
                <Square />
                <Text variant='small' text={items.title} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box marginTop={8} width={50} marginBottom={4} hCenter vCenter gap={2}>
          <ClaimCircle />
          <MediumLine />
          <StyledButton variant='primary' label={{ text: 'Claim' }} onClick={() => ''} />
        </Box>
      </WalletClaimView>
    </ShimmerContainer>
  );
};
