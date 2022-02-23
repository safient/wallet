import styled from 'styled-components';
import { Box, Avatar } from 'components/primitive';
import { BreakPoints } from 'utils';

/**
 * Styling for main container that holds TopBar.
 */
export const TopBarContainer = styled(Box)`
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 2.5rem 35rem !important;
  height: 8rem;

  @media screen and (max-width: ${BreakPoints.medium}) {
    padding: 2.5rem 1.8rem !important;
  }

  @media screen and (max-width: ${BreakPoints.small}) {
    padding: 2.5rem 1.8rem !important;
  }
`;

/**
 * Styling for Logo container.
 */
export const LogoWrapper = styled(Box)`
  display: inline-block !important;
  margin-left: 2.2rem !important;

  /* @media screen and (min-width: ${BreakPoints.large}) {
    visibility: hidden !important;
  } */
`;

/**
 * Styling for Notification.
 */
export const NotificationIcon = styled(Avatar)`
  width: 4rem;
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
