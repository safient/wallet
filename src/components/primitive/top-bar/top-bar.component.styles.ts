import styled from 'styled-components';
import { Box, Avatar } from 'components/primitive';
import { BreakPoints } from 'utils';

/**
 * Styling for main container that holds TopBar.
 */
export const TopBarContainer = styled(Box)`
  background-color: ${({ theme: { colors } }) => colors.white};
  height: 8rem;
  width: 100% !important;
`;

/**
 * Styling for Logo container.
 */
export const LogoWrapper = styled(Box)`
  display: inline-block !important;
  margin-left: 2.2rem !important;
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
  @media screen and (max-width: ${BreakPoints.small}) {
    margin-right: -0.8rem;
  }
`;

export const NavbarContainer = styled.nav`
  width: 120rem !important;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: ${BreakPoints.medium}) {
    min-width: 80rem !important;
    padding: 0 8rem;
    justify-content: space-around;
  }

  @media screen and (max-width: ${BreakPoints.small}) {
    min-width: 36rem !important;
    justify-content: space-between;
    padding: 0 0.5rem;
  }
`;
