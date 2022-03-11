import styled from 'styled-components';
import { NoAccess } from './claim-status/wallet-no-access.component';
import { Recovered } from './claim-status/wallet-recovered.component';
import { Recovering } from './claim-status/wallet-recovering.componant';

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
      {/* <NoAccess /> */}
      {/* <Recovering /> */}
      <Recovered />
    </ActionsContainer>
  );
};
