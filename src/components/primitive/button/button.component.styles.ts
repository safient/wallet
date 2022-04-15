import styled, { keyframes } from 'styled-components';
import { ButtonComponentProps } from './button.component.props';
import { Box } from '../box/box.component';
import { Text } from '../text/text.component';

/**
 * Styles for Base Button.
 */
export const BaseButton = styled(Box)<ButtonComponentProps>`
  height: 5rem;
  width: fit-content;
  padding: 1.2rem 0.6rem !important;
  min-width: 14.2rem !important;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

/**
 * Styles for Primary Button.
 */
export const PrimaryButton = styled(BaseButton)<ButtonComponentProps>`
  background-color: ${({ theme: { colors } }) => colors.primary} !important;
`;

/**
 * Styles for Ghost Button.
 */
export const GhostButton = styled(Box)<ButtonComponentProps>`
  width: fit-content;
  min-width: 14.2rem !important;
  height: 4.2rem;
  border: 1px solid ${({ theme: { colors } }) => colors.borderLightest} !important;
  background-color: transparent;
  border-radius: 0.4rem;
  cursor: ${(disabled) => (disabled ? 'pointer' : 'not-allowed')} !important;
`;

/**
 * Styles for Small Button.
 */
export const SmallButton = styled(Box)<ButtonComponentProps>`
  width: fit-content;
  min-width: 14.2rem !important;
  height: 4.2rem;
  background: ${({ theme: { colors } }) => colors.primaryGradient} !important;
  border-radius: 0.4rem;
  cursor: ${(disabled) => (!disabled ? 'pointer' : 'not-allowed')} !important;
`;

/**
 * Key Frame for spinner.
 */
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

/**
 * Styles for Spinner
 */
export const Spinner = styled.div`
  border: 0.4rem solid ${({ theme: { colors } }) => colors.spinnerBorder};
  border-top: 0.4rem solid ${({ theme: { colors } }) => colors.white};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  animation: ${spin} 0.6s linear infinite;
`;

/**
 * Styles for IconWrapper.
 */
export const IconWrapper = styled.span`
  margin: 0 2rem 0 -2rem;
`;

/**
 * styles for Button Label. default color will be white it can be overridden by passing color props.
 */
export const ButtonText = styled(Text)`
  color: ${({ theme: { colors } }) => colors.white};
`;

/**
 * changes cursor when it is hovered in disabled state.
 */
export const ButtonContainer = styled.div`
  cursor: ${(disabled) => (!disabled ? 'pointer' : 'not-allowed')} !important;
`;
