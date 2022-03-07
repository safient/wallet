import { Box, Text, IconSvg } from 'components/primitive';
import { MetaInfo, StyledWalletCard, WalletText } from './wallet-card.component.styles';
import { WalletCardProps } from './wallet-card.component.props';
import { Link } from 'react-router-dom';
import { RoutePath } from 'navigation/route-path';
import { getStatusInfo, getUserInfo } from './wallet-card.component.utils';
import { WalletCardShimmer } from './wallet-card-shimmer.component';

export const WalletCard: React.FC<WalletCardProps> = (props) => {
  const { walletName, roleName, status, shimmer } = props;

  return (
    <>
      {shimmer ? (
        <WalletCardShimmer />
      ) : (
        <>
          <StyledWalletCard hCenter vCenter>
            <Link to={RoutePath.createWallet}>
              <IconSvg name='safientWallet' size='large' />
            </Link>
            <WalletText variant='content' text={walletName} />
            <MetaInfo row marginTop={2} color='bottomAccent' padding={2.2} align={'center'}>
              <Box align={'center'} padding={1} row>
                <IconSvg name={getUserInfo(roleName).iconName} size='small' />
                <Text paddingLeft={1} variant='small' text={getUserInfo(roleName).text} />
              </Box>
              <Box align={'center'} paddingLeft={6} row>
                <IconSvg name={getStatusInfo(status).iconName} size='medium' />
                <Text
                  paddingLeft={1}
                  variant='small'
                  text={getStatusInfo(status).text}
                  color={getStatusInfo(status).color}
                />
              </Box>
            </MetaInfo>
          </StyledWalletCard>
        </>
      )}
    </>
  );
};
