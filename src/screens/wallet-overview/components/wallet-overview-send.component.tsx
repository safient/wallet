import { Button, GenericModal, Input, Box } from 'components/primitive';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const Send = () => {
  return (
    <GenericModal show={true} hide>
      <Box padding={1.6}>
        <Box gap={1.6}>
          <Input placeholder='Enter your wallet adress' label='Enter Address' />
          <Input placeholder='Value' label='Enter value' />
        </Box>
        <Box marginTop={1}>
          <StyledButton variant='primary' color='primaryGradient' label={{ text: 'Send' }} onClick={() => ''} />
        </Box>
      </Box>
    </GenericModal>
  );
};
