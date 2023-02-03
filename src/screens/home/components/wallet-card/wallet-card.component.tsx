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
  const { safeStore } = useStores();
  const { walletName, roleName, status, shimmer, id } = props;

  async function handleShowWallet() {
    safeStore.setFetching(true);
    safeStore.setRole(roleName);
    history.push(roleName === 'creator' ? RoutePath.walletOverview : RoutePath.walletClaim);
    const safe = await safeService.get(id);
    if (roleName == 'beneficiary') {
      history.push(safe.data?.claim.type == null ? RoutePath.walletOverview : RoutePath.walletClaim);
    }
    const safeData = await safeService.recover(id, roleName);
    if (safeData.hasData()) {

      console.log(safeData.data)


      await walletService.load({mnemonic: safeData.data?.seedPhrase! ,  privateKey: safeData.data?.privateKey!});
      
    }
    safeStore.setFetching(false);
  }

  return (
    <>
      {shimmer ? (
        <WalletCardShimmer />
      ) : (
        <>
          <StyledWalletCard hCenter vCenter onClick={handleShowWallet}>
            <IconSvg name='safientWallet' size='large' />
            <WalletText variant='content' text={walletName} />
            <MetaInfo row marginTop={2} color='bottomAccent' padding={2.2} align={'center'}>
              <Box align={'center'} row className='meta-info' paddingLeft={1}>
                <IconSvg name={getUserInfo(roleName).iconName} size='small' />
                <Text paddingLeft={1} variant='small' text={getUserInfo(roleName).text} />
              </Box>
              <Box align={'center'} row className='meta-info' paddingRight={1}>
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
