import { Button, Text, Image } from 'components/primitive';
import { safientLogo } from 'assets';
import { NavContainer, LogoWrapper, StyledNav, List } from './auth-header.component.styles';

export const Header = () => {
  const redirect = () => {
    window.location.href = 'https://docs.safient.io';
  };

  return (
    <NavContainer>
      <LogoWrapper>
        <Image src={safientLogo} />
      </LogoWrapper>

      <StyledNav>
        <List>
          <Button variant='ghost' label={{ tx: 'common.knowMore', color: 'textLight' }} onClick={redirect} />
        </List>
      </StyledNav>
    </NavContainer>
  );
};
