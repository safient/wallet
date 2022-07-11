import { Box, Button, Image } from 'components/primitive';
import { RoutePath } from 'navigation';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.div`
  background: #fff;
  nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    padding: 2rem !important;
  }
`;

export const NavBar = () => {
  const redirect = () => {
    window.open('https://resources.safient.io/wallet', '_blank');
  };
  return (
    <StyledNav>
      <nav>
        <Link to={RoutePath.home}>
          <Image name='logoAlpha' width={18} />
        </Link>
        <Button variant='ghost' label={{ tx: 'common.knowMore', color: 'textLight' }} onClick={redirect} />
      </nav>
    </StyledNav>
  );
};
