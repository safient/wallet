import { Button, GenericModal, Input, Box } from 'components/primitive';
import { useState } from 'react';
import styled from 'styled-components';
import { useServices } from 'services';
import { useStores } from 'store';

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const Send = () => {

  const { walletService } = useServices();

  const [value, setValue] = useState(null);
  const [address, setAddress] = useState(null);
  const [sending, setSending] = useState(false)

  const handleSendTransaction = async() => {
    setSending(true);
    if(value && address) {
      const res = await walletService.send(address!, value!)
    }
    setSending(false);
  }

  return (
    <GenericModal show={true} hide>
      <Box padding={1.6}>
        <Box gap={1.6}>
          <Input placeholder='Enter your wallet adress' label='Enter Address' onChange={(e: any) => setAddress(e.target.value)}/>
          <Input placeholder='Value' label='Enter value' onChange={(e: any) => setValue(e.target.value)}/>
        </Box>
        <Box marginTop={1}>
          <StyledButton loading={ sending } variant='primary' color='primaryGradient' label={{ text: sending ? 'Sending ...' : 'Send' }} onClick={handleSendTransaction} />
        </Box>
      </Box>
    </GenericModal>
  );
};
