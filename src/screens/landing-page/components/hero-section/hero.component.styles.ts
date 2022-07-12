import styled from 'styled-components';
import { Text } from 'components/primitive';
/**
 * Styles for Gradient Text.
 */

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;

  color: #0f172a;
`;

export const HeroSectionContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 70vh;
  .title {
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;

    color: #0f172a;
  }
  .description {
    align-self: center;
    flex: 1;
    flex-basis: 300px;
  }
  .sub-heading {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #555770;
    margin-top: 2rem;
  }

  .hero-image {
    align-self: center;
  }

  .image {
    height: 507px;
  }
  img {
    width: 589px;
    margin-left: 50px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledButton = styled.button`
  background: linear-gradient(89.58deg, #44bcf0 -19.85%, #818cf8 54.07%, #a099ff 120.75%);
  border-radius: 5px;
  color: rgb(255, 255, 255);
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.8rem 3.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
`;

export const StyledSpan = styled.span`
  background: linear-gradient(89.58deg, #44bcf0 -19.85%, #818cf8 54.07%, #a099ff 120.75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
