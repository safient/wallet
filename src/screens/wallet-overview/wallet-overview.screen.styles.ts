import { Box, Text } from 'components/primitive';
import styled from 'styled-components';

export const BalanceContainer = styled(Box)`
  display: flex !important;
  flex-direction: row !important;
  align-items: flex-end;
`;

export const BalanceInUsd = styled(Text)`
  display: inline-flex;
  /* line-height: 0 !important; */
`;

export const BalanceInEth = styled(Text)`
  display: inline-flex;
  marginn-top: 6px;
  /* line-height: 0 !important; */
`;

export const WalletOverViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0;
  /* align-items: center; */
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const WalletOverView = styled(Box)`
  width: 564px !important;
`;
