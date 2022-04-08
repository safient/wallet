import { Link } from 'react-router-dom';
import { RoutePath } from 'navigation/route-path';
import { Image } from 'components/primitive';
import { DropDownMenu } from '../drop-down-menu/dropdown-menu.component';
import { TopBarContainer, LogoWrapper, BoxGroup, NotificationIcon, NavbarContainer } from './top-bar.component.styles';
import { Menu } from 'components/primitive';

export const TopBar = () => {
  return (
    <>
      <TopBarContainer align={'center'} justify={'center'} hCenter vCenter row>
        <NavbarContainer>
          <LogoWrapper hCenter vCenter>
            <Link to={RoutePath.home}>
              <Image name='logoAlpha' width={20} />
            </Link>
          </LogoWrapper>
          <BoxGroup row>
            <NotificationIcon name='notification' size='small' />
            <DropDownMenu icon={{ name: 'user' }}>
              <Menu />
            </DropDownMenu>
          </BoxGroup>
        </NavbarContainer>
      </TopBarContainer>
    </>
  );
};
