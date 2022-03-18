import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from 'navigation/route-path';
import { Image, Avatar } from 'components/primitive';
import { TopBarContainer, LogoWrapper, BoxGroup, NotificationIcon } from './top-bar.component.styles';
import { Menu } from '../menu-component/menu.component';

export const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
          <Avatar name='user' size='small' onClick={() => setShowMenu(true)} style={{ cursor: 'pointer' }} />
        </BoxGroup>
      </TopBarContainer>
      {showMenu && <Menu show onClose={setShowMenu}/>}
    </>
  );
};
