import styled from 'styled-components';
import { Box, IconSvg, Text } from 'components/primitive';

export const StyledBox = styled(Box)`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const WalletActions = () => {
  return (
    <Box row gap={0}>
      <StyledBox hCenter gap={1}>
        <IconSvg name='receive' size='xLarge' />
        <Text variant='small' tx='walletOverViewPage.recieve' />
      </StyledBox>
      <StyledBox hCenter gap={1}>
        <IconSvg name='send' size='xLarge' />
        <Text variant='small' tx='walletOverViewPage.send' />
      </StyledBox>
      <StyledBox hCenter gap={1}>
        <IconSvg name='trade' size='xLarge' />
        <Text variant='small' tx='walletOverViewPage.trade' />
      </StyledBox>
    </Box>
  );
};
