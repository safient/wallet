import { Link } from 'react-router-dom';
import { RoutePath } from 'navigation/route-path';
import { Image } from 'components/primitive';
import { DropDownMenu } from '../drop-down-menu/dropdown-menu.component';
import { TopBarContainer, LogoWrapper, BoxGroup, NavbarContainer } from './top-bar.component.styles';
import { Menu, Notifications } from 'components/primitive';

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
            <DropDownMenu icon={{ name: 'notification' }}>
              <Notifications />
            </DropDownMenu>
            <DropDownMenu icon={{ name: 'user' }}>
              <Menu />
            </DropDownMenu>
          </BoxGroup>
        </NavbarContainer>
      </TopBarContainer>
    </>
  );
};
