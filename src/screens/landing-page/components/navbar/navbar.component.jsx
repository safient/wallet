import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Image } from 'components/primitive';
import { RoutePath } from 'navigation';

export const StyledNav = styled.div`
  background: #fff;
  nav {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
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
          <Image name='logoAlpha' width={22.5} height={7} />
        </Link>
        <Button variant='ghost' label={{ tx: 'common.knowMore', color: 'textLight' }} onClick={redirect} />
      </nav>
    </StyledNav>
  );
};
