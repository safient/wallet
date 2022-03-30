import styled from 'styled-components';
import { Box, Button, Input, Text } from 'components/primitive';
import { BreakPoints } from 'utils';

export const RegistrationContainer = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const RegistrationFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem;
  height: 100vh;
`;

export const RegistrationFormBox = styled(Box)`
  gap: 2.6rem;
`;

export const FormContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  // width: 53.4rem;
  padding: 5rem 8rem 5rem 8rem;
  align-items: center;
  margin-top: -8rem;
  @media screen and (max-width: ${BreakPoints.small}) {
    margin-top: -10rem;
    width: 320px;
    padding: 3rem 1.5rem 3rem 1.5rem;
  }
`;

export const StyledButton = styled(Button)`
  width: 100% !important;
  margin-top: 3rem !important;
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 100% !important;
  }
`;

export const RegistrationText = styled(Text)`
  margin-bottom: 6rem;
`;

export const TextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledInput = styled(Input)`
  @media screen and (max-width: ${BreakPoints.small}) {
    flex-direction: column;
    margin-top: 2rem;
    gap: 2rem;
    width: 100% !important;
  }
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-top: 0.5rem;
  display: inline-flex !important;
`;

export const TermsContainer = styled.span`
  display: inline-flex !important;
  margin-top: 3rem !important;
  gap: 1.6rem;
`;

export const LinkText = styled.span`
  text-decoration: underline;
  &:hover,
  &:active {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
