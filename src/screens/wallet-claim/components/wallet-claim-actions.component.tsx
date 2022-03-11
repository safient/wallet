import styled from 'styled-components';
import { Box, Text, Image } from 'components/primitive';

export const StyledBox = styled(Box)`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Label = styled(Text)`
  color: #c7c8d9;
`;

export const SvgImage = styled(Image)`
  width: 40px;
  opacity: 0.5 !important;
`;

export const WalletActions = () => {
  return (
    <Box row gap={0}>
      <StyledBox hCenter gap={1}>
        <SvgImage name='recieve' />
        <Label variant='small' tx='walletOverViewPage.recieve' />
      </StyledBox>
      <StyledBox hCenter gap={1}>
        <SvgImage name='send' />
        <Label variant='small' tx='walletOverViewPage.send' />
      </StyledBox>
      <StyledBox hCenter gap={1}>
        <SvgImage name='trade' />
        <Label variant='small' tx='walletOverViewPage.trade' />
      </StyledBox>
    </Box>
  );
};
