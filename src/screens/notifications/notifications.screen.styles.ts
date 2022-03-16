import styled from 'styled-components';
import { Box } from 'components/primitive';

export const NotificationsContainer = styled.section`
  margin-top: 4rem;
`;

export const BackButtonContainer = styled.div`
  align-self: flex-start;
`;

export const Notifications = styled.div`
  padding: 6rem;
  background: white;
  margin-top: 3rem;
`;

export const Activities = styled.section`
  display: flex;
  gap: 2.4rem;
  justify-content: center;
  margin-bottom: 3.4rem;
`;

export const StyledButton = styled(Box)`
  width: 12.2rem;
  height: 3.7rem;
  background: #f6f7fb;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
  color: #d55555;
  font-weight: 600;
  padding: 0 0.8rem;
  cursor: pointer;
`;
