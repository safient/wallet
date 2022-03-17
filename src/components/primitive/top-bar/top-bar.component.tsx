import { Image, Avatar } from 'components/primitive';
import { TopBarContainer, LogoWrapper, BoxGroup, NotificationIcon } from './top-bar.component.styles';
import { RoutePath } from 'navigation/route-path';
import { Link } from 'react-router-dom';
import { Menu } from '../menu-component/menu.component';
import { useState } from 'react';
import { GenericModal } from '../generic-modal/generic-modal.component';

export const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  console.log('menu', showMenu);
  return (
    <>
      <TopBarContainer align={'center'} justify={'center'} hCenter vCenter row>
        <LogoWrapper hCenter vCenter>
          <Link to={RoutePath.home}>
            <Image name='safientWalletLogo' width={18} />
          </Link>
        </LogoWrapper>
        <BoxGroup row>
          <NotificationIcon name='notification' size='small' />

          <Avatar name='user' size='small' onClick={() => setShowMenu(!showMenu)} />
        </BoxGroup>
      </TopBarContainer>
      {showMenu && <Menu show />}
    </>
  );
};
