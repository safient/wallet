import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useClipBoardTimer } from 'hooks/useClipboardTimer';
import styled from 'styled-components';
import QRCode from "react-qr-code"

import { Button, GenericModal, Text, Box, IconSvg, Alert} from 'components/primitive';

import { AlertContainer} from './wallet-overview.component.styles';
import { useStores } from 'store';


export const StyledButton = styled(Button)`
  width: 100%;
`;

export const Receive = () => {
 
  const { safeStore } = useStores();
  const [copied, setCopied] = useState(false);

  useClipBoardTimer(copied, setCopied);

  return (
    <GenericModal show={true} hide>
      <Box padding={1.6}>
        <AlertContainer marginTop={1}>
                {copied && <Alert variant='success' icon label={{ tx: 'walletOverViewPage.copiedSuccessfully' }} />}
        </AlertContainer>
        <Box gap={1.6}>
        <Box hCenter vCenter marginTop={1.8} >
          <QRCode value={safeStore.walletInfo?.address!} size={200}/>
          <Box hCenter vCenter marginTop={1.8}>
            <Text variant='small' text={safeStore.walletInfo?.address? safeStore.walletInfo?.address : ''} />
            <CopyToClipboard text={safeStore.walletInfo?.address? safeStore.walletInfo?.address : ''} onCopy={() => setCopied(true)}>
                <span>
                    <IconSvg name='clipBoard' />
                </span>
            </CopyToClipboard>
          </Box>
          
        </Box>
        </Box>
       
        {/* <Box marginTop={1}>
          <StyledButton loading={ sending } variant='primary' color='primaryGradient' label={{ text: sending ? 'Sending ...' : 'Send' }} onClick={handleSendTransaction} />
        </Box> */}
      </Box>
    </GenericModal>
  );
};
