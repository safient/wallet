import { BreakPoints } from 'utils';
import styled from 'styled-components';
import { Box, Button } from 'components/primitive';

export const InfoContainer = styled.section`
  display: flex;
  gap: 1.8rem;
  align-self: flex-start;
  margin-bottom: 1rem;
`;
export const IconContainer = styled.div`
  flex: 1;
`;
export const HeadingContainer = styled.div`
  flex: 1;
  flex: 0 0 auto;
  align-self: center;
`;
export const CounterContainer = styled.div`
  flex: 1;
  align-self: center;
`;

export const StyledDiv = styled.div`
  margin-top: 3rem;
`;

export const NotificationContainer = styled(Box)`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.borderLightest};
`;

export const StyledButton = styled(Button)`
  width: 100% !important;
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: ${BreakPoints.small}) {
    padding: 1.4rem !important;
  }
`;
export const ProfileContainer = styled(Box)`
  display: inline-block;
  width: 59.6rem !important;
  padding: 6rem !important;
  @media screen and (max-width: ${BreakPoints.small}) {
    padding: 2rem !important;
  }
`;
