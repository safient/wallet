import styled from 'styled-components';
import { Box, Text, IconSvg, EmptyState } from 'components/primitive';
import { AllActivitiesProps } from './wallet-activities.component.props';
import { getActivityInfo } from './wallet-activities.component.utils';
import { AddressUtil } from 'utils/address';

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

export const TransactionText = styled(Text)`
cursor: pointer;
`;

export const AllActivities: React.FC<AllActivitiesProps> = (props) => {
  const { transactions } = props;

  return (
    <Box hCenter vCenter>
      <Text variant='small' tx='walletOverViewPage.activities' color='textLight' bold600 />

      {transactions?.length ? transactions?.map((transaction) => (
        <Activities>
          <Box flex={0}>
            <IconSvg name={getActivityInfo(transaction.event).iconName} size='xLarge' />
          </Box>
          <StyledDiv>
            <TransactionText
              
              onClick={ ()=> window.open(transaction.tx, '_blank')}
              variant='small'
              text={`${getActivityInfo(transaction.event).text} ${AddressUtil.shorternAddress(transaction.address)}`}
              color='textLight'
            />
            <Text variant='small' text={transaction.age + ' ago'} color='textLighter' />
          </StyledDiv>
          <Box>
            <Text variant='small' text={transaction.value + ' ETH'} color='textLighter' />
          </Box>
        </Activities>
      )):
      <EmptyState label={{ tx: 'emptyStates.emptyActivities' }} image={{ name: 'emptyActivity' }} />}
      <Box marginTop={2.4}>
        {/* hide view all text if no activities found */}
        {/* <ViewAllText variant='small' text='View All' color='textLight' center /> */}
      </Box>
    </Box>
  );
};
