import styled, { keyframes } from 'styled-components';
import { Box } from 'components/primitive';
import { StyledWalletCard, MetaInfo } from './wallet-card.component.styles';

/**
 * Keyframe animation for shimmer effect.
 */

export const placeholderShimmer = keyframes`
   0% {
    background-position: -46.8rem 0;
  }

  100% {
    background-position: 46.8rem 0;
  }

`;

/**
 * Base style which can be inherited.
 */
export const BaseStyle = styled.div`
  background: ${({ theme: { colors } }) => colors.shimmer};
  background-image: linear-gradient(
    to right,
    ${({ theme: { colors } }) => colors.shimmer} 0%,
    #edeef1 20%,
    ${({ theme: { colors } }) => colors.shimmer} 40%,
    ${({ theme: { colors } }) => colors.shimmer} 100%
  );
  background-repeat: no-repeat;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${placeholderShimmer};
  -webkit-animation-timing-function: linear;
`;

/**
 * Styles for line.
 */
export const Line = styled(BaseStyle)`
  border-radius: 0.4rem;
  width: 10rem;
  height: 2rem;
`;

/**
 * Styles for Circle.
 */
export const Circle = styled(BaseStyle)`
  border-radius: 5rem;
  width: 5.5rem;
  height: 5.5rem;
`;

export const WalletCardShimmer = () => {
  return (
    <StyledWalletCard hCenter vCenter>
      <Box flex={0} hCenter vCenter marginTop={-5}>
        <Circle />
      </Box>
      <Box flex={0} hCenter vCenter marginTop={1}>
        <Line />
      </Box>
      <MetaInfo row marginTop={3} color='bottomAccent' padding={2.2} align={'center'}>
        <Box align={'center'} padding={1} row>
          <Line />
        </Box>
        <Box align={'center'} paddingLeft={6} row>
          <Line />
        </Box>
      </MetaInfo>
    </StyledWalletCard>
  );
};
