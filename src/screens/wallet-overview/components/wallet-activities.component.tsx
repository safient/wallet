import styled from 'styled-components';
import { Box, Text, IconSvg } from 'components/primitive';

export const ViewAllText = styled(Text)`
  cursor: pointer;
  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const Activities = styled.section`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2.6rem;
  align-self: flex-start;
`;

export const StyledDiv = styled.div`
  line-height: 1;
  display: inline-flex;
  flex-direction: column;
  gap: 0.4rem;
  min-width: 30rem;
`;

export const AllActivities = () => {
  return (
    <Box hCenter vCenter>
      <Text variant='small' tx='walletOverViewPage.activities' color='textLight' bold600 />
      {/* map this */}
      <Activities>
        <Box flex={0}>
          <IconSvg name='recieved' size='xLarge' />
        </Box>
        <StyledDiv>
          <Text variant='small' text='Recieved from 0x70997970C51812dc..' color='textLight' />
          <Text variant='small' text='2 days ago' color='textLighter' />
        </StyledDiv>
        <Box>
          <Text variant='small' text='0.1 ETH' color='textLighter' />
        </Box>
      </Activities>

      <Activities>
        <Box flex={0}>
          <IconSvg name='sent' size='xLarge' />
        </Box>
        <StyledDiv>
          <Text variant='small' text='Sent to 0x70997970C51812dc..' color='textLight' />
          <Text variant='small' text='2 days ago' color='textLighter' />
        </StyledDiv>
        <Box>
          <Text variant='small' text='0.1 ETH' color='textLighter' />
        </Box>
      </Activities>

      <Box marginTop={2.4}>
        <ViewAllText variant='small' text='View All' color='textLight' center />
      </Box>
    </Box>
  );
};
