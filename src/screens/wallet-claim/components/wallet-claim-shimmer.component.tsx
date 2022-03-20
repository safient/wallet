import styled from 'styled-components';
import { Box, Text } from 'components/primitive';
import { Square, Line } from 'components/primitive/shimmers/shimmer-component';
import { BalanceInUsd } from './wallet-claim.component.styles';
import {
  WalletOverViewContainer,
  WalletOverView,
} from 'screens/wallet-overview/components/wallet-overview.component.styles';

export const LongLine = styled(Line)`
  width: 35rem;
`;

export const MediumLine = styled(Line)`
  width: 20rem;
`;

export const Actions = [
  {
    title: 'Send',
    id: 0,
  },
  {
    title: 'Receive',
    id: 1,
  },
  {
    title: 'Trade',
    id: 2,
  },
];

export const WalletOverviewShimmer = () => {
  return (
    <WalletOverViewContainer>
      <WalletOverView padding={4} hCenter vCenter color='white' marginTop={8.4}>
        <Box hCenter vCenter marginTop={1.8}>
          <Box gap={2} hCenter vCenter>
            <BalanceInUsd variant='title' color='textLight' text='Total  Value' />
            <Box width={50} marginBottom={2} hCenter vCenter gap={1.2}>
              <MediumLine />
              <MediumLine />
            </Box>
          </Box>
        </Box>
        <Box marginTop={5}>
          <Box row gap={0}>
            {Actions.map((items) => (
              <Box hCenter vCenter gap={1} key={items.id}>
                <Square />
                <Text variant='small' text={items.title} />
              </Box>
            ))}
          </Box>
        </Box>

        <Box marginTop={5} hCenter vCenter>
          <Text variant='small' text='Activities' color='textLight' bold600 />
          <Box marginTop={2.6} width={50} marginBottom={2} hCenter vCenter gap={1.2}>
            <LongLine />
            <LongLine />
            <LongLine />
          </Box>
        </Box>
      </WalletOverView>
    </WalletOverViewContainer>
  );
};
