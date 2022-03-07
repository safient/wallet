import styled from 'styled-components';
import { Box } from 'components/primitive';

/**
 * Styling for AppContainer.
 */
export const AppContainer = styled.div`
  height: 100% !important;
  display: flex;
  flex-direction: row;
`;

/**
 * styling for main ContentWrapper.
 */
export const ContentWrapper = styled(Box)`
  width: 100vw !important;
`;

/**
 * styling for main container.
 */
export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 0;
  margin: 0 auto;
  background-color: ${({ theme: { colors } }) => colors.applicationBackground};
  width: inherit;
`;
