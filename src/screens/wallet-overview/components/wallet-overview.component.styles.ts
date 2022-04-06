import styled from 'styled-components';
import { Badge, Box, Text } from 'components/primitive';

export const BalanceContainer = styled(Box)`
  display: flex !important;
  flex-direction: row !important;
  align-items: flex-end;
`;

export const BalanceInUsd = styled(Text)`
  display: inline-flex;
`;

export const BalanceInEth = styled(Text)`
  display: inline-flex;
  marginn-top: 0.6rem;
`;

export const IconsContainer = styled(Box)`
  width: 100%;
`;

export const WalletOverViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-in-out;
`;

export const WalletOverView = styled(Box)`
  display: inline-block;
  width: 59.6rem !important;
`;

export const AlertContainer = styled(Box)`
  transition: all 0.2s ease-in-out !important;
`;

export const WalletName = styled(Text)`
  cursor: pointer;
`;

export const Network = styled(Badge)`
  border-radius: 0.5rem;
`;
