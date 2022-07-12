import { Link } from 'react-router-dom';
import { Button, Image } from 'components/primitive';
import { NavContainer, LogoWrapper, BoxGroup } from './auth-header.component.styles';
import { RoutePath } from 'navigation/route-path';

export const Header = () => {
  const redirect = () => {
    window.open('https://resources.safient.io/wallet', '_blank');
  };

  return (
    <NavContainer align={'center'} justify={'center'} hCenter vCenter row>
      <LogoWrapper hCenter vCenter>
        <Link to={RoutePath.home}>
          <Image name='logoAlpha' width={22.5} height={7} />
        </Link>
      </LogoWrapper>
      <BoxGroup hCenter vCenter row align={'center'} justify={'center'}>
        <Button variant='ghost' label={{ tx: 'common.knowMore', color: 'textLight' }} onClick={redirect} />
      </BoxGroup>
    </NavContainer>
  );
};
