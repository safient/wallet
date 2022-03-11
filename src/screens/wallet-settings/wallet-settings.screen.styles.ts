import styled from 'styled-components';
import { Box, Button, Input, Text } from 'components/primitive';
import { BreakPoints } from 'utils';

export const WalletSettingsFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem;
  height: 100vh;
`;

export const BackButtonContainer = styled.div`
  position: absolute;
  top: 10%;
  cursor: pointer;
`;
export const BeneficiaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.textLight};
`;

export const SignnalingInput = styled(Input)`
  width: 16rem !important;
`;
export const AddIconContainer = styled(Box)`
  cursor: pointer;
`;

export const WalletSettingsFormBox = styled(Box)`
  gap: 2.6rem;
`;

export const FormContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 5rem 8rem 5rem 8rem;
  align-items: center;
  margin-top: -8rem;
  position: relative;
  @media screen and (max-width: ${BreakPoints.small}) {
    margin-top: -10rem;
    width: 32rem;
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

export const WalletSettingsText = styled(Text)`
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
