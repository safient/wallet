import { Image, Box, Text } from 'components/primitive';
import { useHistory } from 'react-router-dom';
import { HeroSectionContainer, StyledButton, Title, StyledSpan } from './hero.component.styles';

export const HeroSection = () => {
  const history = useHistory();

  return (
    <>
      <HeroSectionContainer>
        <div className='description'>
          <Title>
            {' '}
            A Non-custodial <StyledSpan>Recoverable</StyledSpan> and <StyledSpan>Inheritable</StyledSpan> wallet
            Application
          </Title>
          <Text
            variant='small'
            text='A crypto wallet solution for easy self recovery and inheritance. Safe keeping of your crypto as convenient as it gets.'
            color='white'
            className='sub-heading'
          />
          <Box marginTop={2} flex={0}>
            <StyledButton onClick={() => history.push('/')}>Try Now</StyledButton>
          </Box>
        </div>
        <div className='hero-image'>
          <Image name='landingPage' className='image' />
        </div>
      </HeroSectionContainer>
    </>
  );
};
