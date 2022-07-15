import { useHistory } from 'react-router-dom';
import { RoutePath } from 'navigation/route-path';
import { Header } from 'components/common/auth-header.component';
import { Box, Button, Image, Text } from 'components/primitive';

import { NavBar } from './components/navbar/navbar.component';
import { LandingPageContainer } from './landing-page.screen.styles';
import { HeroSection } from './components/hero-section/hero.component';
import { Container } from './components/hero-section/hero.component.styles';
import { HowItWorks } from './components/how-it-works/how-it-works.component';
import { CtaSection } from './components/cta-section/cta.component';

export const WelcomeScreen = () => {
  let history = useHistory();

  const redirectToLogin = () => {
    history.push(RoutePath.login);
  };

  return (
    <LandingPageContainer>
      <NavBar />
      <Container>
        <HeroSection />
        <HowItWorks />
      </Container>
      <CtaSection />
    </LandingPageContainer>
  );
};
