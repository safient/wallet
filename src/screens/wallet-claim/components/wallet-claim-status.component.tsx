//@ts-nocheck
import styled from 'styled-components';
import { NoAccess } from './claim-status/wallet-no-access.component';
import { Recovered } from './claim-status/wallet-recovered.component';
import { Recovering } from './claim-status/wallet-recovering.componant';
import { WalletClaimStatusProps } from './wallet-claim.component.props';

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
`;

export const ClaimStaus: React.FC<WalletClaimStatusProps> = (props) => {
  const { status, timestamp, claimType, claiming, confirm, setConfirm, claimStatus, createClaim, handleShowWallet } =
    props;

  return (
    <ActionsContainer>
      {status === 0 && (
        <NoAccess
          claiming={claiming}
          confirm={confirm}
          setConfirm={setConfirm}
          createClaim={createClaim}
          claimStatus={claimStatus}
        />
      )}
      {(status === 1 || status === 2) && <Recovering timestamp={timestamp} claimType={claimType} />}
      {(status === 3 || status === 4) && <Recovered handleShowWallet={handleShowWallet} />}
    </ActionsContainer>
  );
};
