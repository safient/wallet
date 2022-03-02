import styled from 'styled-components';
import { Box, Text } from 'components/primitive';

/**
 * Styles for WelcomeScreen Container
 */
export const WelcomeContainer = styled(Box)`
  height: 100%;
`;

/**
 * Styles for Gradient Text.
 */

export const Title = styled(Text)`
  background: ${({ theme: { colors } }) => colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
