import { Image, Avatar } from 'components/primitive';
import { TopBarContainer, LogoWrapper, BoxGroup, NotificationIcon } from './top-bar.component.styles';
import { safientLogo } from 'assets';

export const TopBar = () => {
  return (
    <TopBarContainer align={'center'} justify={'center'} hCenter vCenter row>
      <LogoWrapper hCenter vCenter>
        <Image name='safientWalletLogo' width={12.1} />
      </LogoWrapper>
      <BoxGroup row>
        <NotificationIcon name='notification' size='small' />
        <Avatar name='user' size='small' />
      </BoxGroup>
    </TopBarContainer>
  );
};
