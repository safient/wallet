import { Box, Text, IconSvg } from 'components/primitive';
import { MetaInfo, StyledWalletCard, WalletText } from './wallet-card.component.styles';
import { WalletCardProps } from './wallet-card.component.props';
import { Link, useHistory } from 'react-router-dom';
import { RoutePath } from 'navigation/route-path';
import { getStatusInfo, getUserInfo } from './wallet-card.component.utils';
import { WalletCardShimmer } from './wallet-card-shimmer.component';
import { useServices } from 'services';
import { useStores } from 'store';

export const WalletCard: React.FC<WalletCardProps> = (props) => {

  let history = useHistory();
  const { safeService, walletService } = useServices();
  const { safeStore } =  useStores()
  const { walletName, roleName, status, shimmer, id } = props;

  async function handleShowWallet() {

    safeStore.setFetching(true)
    history.push(RoutePath.walletOverview)
    const safe = await safeService.recover(id, roleName)
    if (safe.hasData()) {
      if (safe.data?.seedPhrase) {
      await walletService.load(safe.data?.seedPhrase)
      }
      safeStore.setFetching(false)
      
    }
  }



  return (
    <>
      {shimmer ? (
        <WalletCardShimmer />
      ) : (
        <>
          <StyledWalletCard hCenter vCenter onClick={handleShowWallet} >
              <IconSvg name='safientWallet' size='large' />
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
