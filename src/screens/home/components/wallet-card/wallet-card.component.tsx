import { Box, Text, IconSvg } from 'components/primitive';
import { MetaInfo, StyledWalletCard, WalletText } from './wallet-card.component.styles';
import { WalletCardProps } from './wallet-card.component.props';
import { Link } from 'react-router-dom';
import { RoutePath } from 'navigation/route-path';
import { getStatusInfo } from './wallet-card.component.utils';

export const WalletCard: React.FC<WalletCardProps> = (props) => {
  const { walletName, roleName, status  } = props;

  return (
    <StyledWalletCard hCenter vCenter>
            <Link to={RoutePath.createWallet}>
              <IconSvg name='safientWallet' size='large' />
            </Link>
            <WalletText variant='content' text={walletName} />
            <MetaInfo row marginTop={2} color='bottomAccent' padding={2.2} align={'center'}>
        <Box align={'center'} padding={1} row >
        <IconSvg name='avatar' size='small' />
          <Text paddingLeft={1} variant='small' text={roleName} />
        </Box>
        <Box align={'center'} paddingLeft={6} row>
        <IconSvg name={getStatusInfo(status).iconName} size='medium' />
          <Text paddingLeft={1} variant='small' text={getStatusInfo(status).text} />
        </Box>
      </MetaInfo>
    </StyledWalletCard>
  );
};
