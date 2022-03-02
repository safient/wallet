import { Box, Text, IconSvg } from 'components/primitive';

export const Activities = () => {
  return (
    <Box marginTop={5} hCenter vCenter>
      <Text variant='small' text='Activities' color='textDark' />
      <Box marginTop={2.6} width={50} marginBottom={2}>
        <Box row>
          <Box>
            <Box>
              <IconSvg name='send' size='xLarge' />
            </Box>
          </Box>
          <Box flex={2}>
            <Text variant='small' text='Received from 0x70997970C51812dc..' color='textDark' />
            <Text variant='small' text='2 days ago' />
          </Box>
          <Box>
            <Text variant='small' text='0.1 ETH' />
          </Box>
        </Box>
        <Box marginTop={2}>
          <Text variant='small' text='View All' color='textDark' center />
        </Box>
      </Box>
    </Box>
  );
};
