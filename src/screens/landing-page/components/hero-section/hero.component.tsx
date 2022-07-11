import { Image, Box, Text } from 'components/primitive';
import { useHistory } from 'react-router-dom';
import { HeroSectionContainer, StyledButton, Title } from './hero.component.styles';

export const HeroSection = () => {
  const history = useHistory();

  return (
    <>
      <HeroSectionContainer>
        <div className='description'>
          <Title
            variant='title'
            text='A Non Custodial recoverable and Inheritable wallet application built on Safient Protocol.'
            className='title'
          />
          <Text
            variant='small'
            text='A crypto wallet solution for easy self recovery and inheritance'
            color='white'
            className='sub-heading'
          />
          <Box marginTop={2} flex={0}>
            <StyledButton onClick={() => history.push('/')}>Try Now</StyledButton>
          </Box>
        </div>
        <div className='hero-image'>
          <Image width={41.7} name='landingPage' />
        </div>
      </HeroSectionContainer>
    </>
  );
};
