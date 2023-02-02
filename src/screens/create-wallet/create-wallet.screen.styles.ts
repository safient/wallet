import styled from "styled-components";
import { Box, Button, Input, Text } from "../../components/primitive";
import { BreakPoints } from "../../utils";

/**
 * Main container of the home screen.
 */
export const HomeScreenContainer = styled(Box)`
  height: 95%;
  margin: 3rem !important;

  @media screen and (max-width: ${BreakPoints.small}) {
    width: 100%;
  }
`;

/**
 * Styles for Title Text.
 */
export const Title = styled(Text)`
  margin-left: 38rem;
  @media screen and (max-width: ${BreakPoints.small}) {
    margin-left: 0.1rem;
  }
`;

export const WalletCreateFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;

export const WalletCreateFormBox = styled(Box)`
  gap: 2.6rem;
  margin-bottom: 2rem;
`;

export const FormContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  width: 60rem;
  padding: 5rem 8rem 5rem 8rem;
  align-items: center;
  margin-top: -8rem;

  @media screen and (max-width: ${BreakPoints.small}) {
    margin-top: -12rem;
    padding: 3rem 1.5rem 3rem 1.5rem;
    width: 38rem;
  }
`;

export const StyledButton = styled(Button)`
  width: 100% !important;
  margin-top: 3rem !important;
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 100% !important;
  }
`;

export const WalletCreateText = styled(Text)`
  margin-bottom: 6rem;
  transform: translate(-10%);
`;

export const StyledInput = styled(Input)`
  @media screen and (max-width: ${BreakPoints.small}) {
    flex-direction: column;
    margin-top: 2rem;
    gap: 2rem;
    width: 100% !important;
  }
`;

export const SignnalingInput = styled(Input)`
  width: 16rem !important;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.textLight};
`;
