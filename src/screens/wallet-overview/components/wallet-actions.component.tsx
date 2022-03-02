import { Box, IconSvg, Text } from 'components/primitive';

export const WalletActions = () => {
  return (
    // add gep
    <Box row gap={0}>
      <Box hCenter gap={1}>
        <IconSvg name='recieve' size='xLarge' />
        <Text variant='small' text='Recieve' />
      </Box>
      <Box hCenter gap={1}>
        <IconSvg name='send' size='xLarge' />
        <Text variant='small' text='Send' />
      </Box>
      <Box hCenter gap={1}>
        <IconSvg name='trade' size='xLarge' />
        <Text variant='small' text='Trade' />
      </Box>
    </Box>
  );
};
