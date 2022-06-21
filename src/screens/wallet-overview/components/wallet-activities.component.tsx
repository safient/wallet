import styled from 'styled-components';
import { Box, Text, IconSvg, EmptyState } from 'components/primitive';
import { AllActivitiesProps } from './wallet-activities.component.props';
import { getActivityInfo } from './wallet-activities.component.utils';
import { AddressUtil } from 'utils/address';
import { BreakPoints } from 'utils';

export const ViewAllText = styled(Text)`
  cursor: pointer;
  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const Activities = styled.section`
  display: flex;
  gap: 2rem;
  margin: 0 auto;
  justify-content: center;
  margin-top: 2.6rem;
  align-self: flex-start;
  overflow: hidden;
  align-items: center;
  @media screen and (max-width: ${BreakPoints.small}) {
    flex-direction: column;
    align-self: center;
    justify-content: center;
    overflow: hidden;
    .icon {
      align-items: center;
    }
    .text {
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const StyledDiv = styled.div`
  line-height: 1;
  display: inline-flex;
  flex-direction: column;
  gap: 0.4rem;
  min: 30rem;
  overflow: hidden;

  @media screen and (max-width: ${BreakPoints.small}) {
    max-width: 30rem;
    .icon {
      align-items: center;
    }
    .text {
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const TransactionText = styled(Text)`
  cursor: pointer;
`;

export const AllActivities: React.FC<AllActivitiesProps> = (props) => {
  const { transactions } = props;

  return (
    <Box hCenter vCenter>
      <Text variant='small' tx='walletOverViewPage.activities' color='textLight' bold600 />

      {transactions?.length ? (
        transactions?.map((transaction) => (
          <Activities>
            <Box flex={0} className='icon'>
              <IconSvg name={getActivityInfo(transaction.event).iconName} size='xLarge' />
            </Box>
            <StyledDiv>
              <TransactionText
                onClick={() => window.open(transaction.tx, '_blank')}
                variant='small'
                text={`${getActivityInfo(transaction.event).text} ${AddressUtil.shorternAddress(transaction.address)}`}
                color='textLight'
                className='text'
              />
              <Text variant='small' text={transaction.age + ' ago'} color='textLighter' className='text' />
            </StyledDiv>
            <Box>
              <Text variant='small' text={transaction.value + ' ETH'} color='textLighter' className='text' />
            </Box>
          </Activities>
        ))
      ) : (
        <EmptyState label={{ tx: 'emptyStates.emptyActivities' }} image={{ name: 'emptyActivity' }} />
      )}
      <Box marginTop={2.4}></Box>
    </Box>
  );
};
