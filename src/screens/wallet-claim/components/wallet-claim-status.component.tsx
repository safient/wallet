import styled from 'styled-components';
import { Recover } from './claim-status/wallet-recover.component';
import { NoAccess } from './claim-status/wallet-no-access.component';

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
`;

export const ClaimStaus = () => {
  return (
    <ActionsContainer>
      {/* conditional rendering */}
      {/* <Recover /> */}
      <NoAccess />
    </ActionsContainer>
  );
};
