import { Image, Avatar } from 'components/primitive';
import { TopBarContainer, LogoWrapper, BoxGroup, NotificationIcon } from './top-bar.component.styles';
import { RoutePath } from 'navigation/route-path';
import { Link } from 'react-router-dom';

export const TopBar = () => {
  return (
    <TopBarContainer align={'center'} justify={'center'} hCenter vCenter row>
      <LogoWrapper hCenter vCenter>
      <Link to={RoutePath.home} >
        <Image name='safientWalletLogo' width={18} />
      </Link>
      </LogoWrapper>
      <BoxGroup row>
        <NotificationIcon name='notification' size='small' />
        <Avatar name='user' size='small' />
      </BoxGroup>
    </TopBarContainer>
  );
};
