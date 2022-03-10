import styled from 'styled-components';
import { Image, Button } from 'components/primitive';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2.4rem;
`;

export const StyledImage = styled(Image)`
  width: 6.5rem;
`;

export const DisabledButton = styled(Button)`
  cursor: not-allowed;
`;
