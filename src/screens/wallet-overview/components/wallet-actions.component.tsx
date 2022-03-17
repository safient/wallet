import styled from 'styled-components';
import { Box, IconSvg, Text } from 'components/primitive';
import { Send } from './wallet-overview-send.component';
import { useState } from 'react';
import { Receive } from './wallet-overview-receive.component';

export const StyledBox = styled(Box)`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const WalletActions = () => {
  const [openSendModal, setOpenSendModal] = useState(false);
  const [openReceiveModal, setOpenReceiveModal] = useState(false)
  return (
    <>
      <Box row gap={0}>
        <StyledBox hCenter gap={1} onClick={() => setOpenReceiveModal(true)}>
          <IconSvg name='receive' size='xLarge' />
          <Text variant='small' tx='walletOverViewPage.recieve' />
        </StyledBox>
        <StyledBox hCenter gap={1} onClick={() => setOpenSendModal(true)}>
          <IconSvg name='send' size='xLarge' />
          <Text variant='small' tx='walletOverViewPage.send' />
        </StyledBox>
        <StyledBox hCenter gap={1}>
          <IconSvg name='trade' size='xLarge' />
          <Text variant='small' tx='walletOverViewPage.trade' />
        </StyledBox>
      </Box>

      {openSendModal && <Send onClose={setOpenSendModal} />}
      {openReceiveModal && <Receive onClose={setOpenReceiveModal}  />}
    </>
  );
};
