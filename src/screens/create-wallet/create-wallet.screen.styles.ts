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
    height: 80vh;
    width: 100vw;
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
  padding: 10rem;
  height: 100vh;
`;

export const WalletCreateFormBox = styled(Box)`
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
  width: 40rem !important;
  margin-top: 3rem !important;
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 100% !important;
  }
`;

export const WalletCreateText = styled(Text)`
  margin-bottom: 6rem;
`;

export const StyledInput = styled(Input)`
  @media screen and (max-width: ${BreakPoints.small}) {
    flex-direction: column;
    margin-top: 2rem;
    gap: 2rem;
    width: 100% !important;
  }
`;
