import { Box } from 'components/primitive';
import styled from 'styled-components';
import { BreakPoints } from 'utils';

/**
 * Styling for Logo container.
 */
export const LogoWrapper = styled(Box)`
  display: inline-block !important;
  margin-left: 2.2rem !important;
`;

export const NavContainer = styled(Box)`
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 2.5rem 35rem !important;
  height: 8rem;

  flex-flow: unset !important;
  @media screen and (max-width: ${BreakPoints.medium}) {
    padding: 2.5rem 1.8rem !important;
  }

  @media screen and (max-width: ${BreakPoints.small}) {
    padding: 2.5rem 1.8rem !important;
  }
`;

/**
 * Styling for BoxGroup container.
 */
export const BoxGroup = styled(Box)`
  gap: 0.8rem;
  margin-right: 0.7rem !important;
  &:nth-last-child() {
    padding: 0.8rem !important;
  }
`;
