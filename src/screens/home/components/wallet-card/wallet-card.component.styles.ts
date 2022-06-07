import { Box, Card, Text } from 'components/primitive';
import styled from 'styled-components';
import { BreakPoints } from '../../../../utils';

export const StyledWalletCard = styled(Card)`
  flex: 0 0 auto !important;
  height: 24.3rem !important;
  max-width: 33rem !important;
  margin: 1.5rem !important;
  border-radius: 0.5rem;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  background-color: ${({ theme: { colors } }) => colors.white};
  cursor: pointer !important;

  @media screen and (max-width: ${BreakPoints.small}) {
    flex: 0 0 auto !important;
    max-height: 24.3rem !important;
    max-width: 33rem !important;
    margin: 1.5rem 0 1.5rem !important;
  }
`;
/**
 * Styles for text inside the cards.
 */
export const WalletText = styled(Text)`
  margin-top: 2rem;
`;

export const MetaInfo = styled(Box)`
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: space-between !important;
  flex: 0 0 auto !important;
  width: 100%;
  height: 7.2rem;
  .meta-info {
    align-content: center !important;
  }
`;
