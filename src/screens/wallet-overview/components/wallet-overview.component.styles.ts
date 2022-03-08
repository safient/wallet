import { Box, Text } from 'components/primitive';
import styled from 'styled-components';

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

export const WalletOverViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0;
  height: 100%;
  width: 100%;
`;

export const WalletOverView = styled(Box)`
  display: inline-block;
  width: 59.6rem !important;
`;
