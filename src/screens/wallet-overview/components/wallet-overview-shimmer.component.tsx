import styled from 'styled-components';
import { Box, Text } from 'components/primitive';
import { Square, Line } from 'components/primitive/shimmers/shimmer-component';
import { WalletOverViewContainer, WalletOverView } from './wallet-overview.component.styles';

export const LongLine = styled(Line)`
  width: 35rem;
`;

export const MediumLine = styled(Line)`
  width: 20rem;
`;

export const SmallLine = styled(Line)`
  width: 6rem;
  height: 1rem;
`;

export const Actions = [
  {
    title: 'Receive',
    id: 0,
  },
  {
    title: 'Send',
    id: 0,
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
                <SmallLine />
              </Box>
            ))}
          </Box>
        </Box>

        <Box marginTop={5} hCenter vCenter>
          <MediumLine />
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
