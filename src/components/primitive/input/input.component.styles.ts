import styled from 'styled-components';
import { BreakPoints } from 'utils';
import { InputComponentProps } from './input.component.props';

/**
 * Styles for Input Container.
 */
export const InputContainer = styled.fieldset<InputComponentProps>`
  display: inline-flex;
  flex-direction: column;
  width: 100% !important;
  @media screen and (max-width: ${BreakPoints.medium}) and (max-width: ${BreakPoints.small}) {
    width: 100% !important;
  }
`;

/**
 * Styles for Input Field.
 */
export const StyledInput = styled.input<InputComponentProps>`
  color: ${({ error, theme: { colors } }) => (error ? colors.error : colors.textLight)};
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.5em 1em 0.5em 1em;
  border-radius: 0.5rem;
  border: 1px solid ${({ error, theme: { colors } }) => (error ? colors.error : colors.borderLightest)} !important;
  outline: none;
  box-sizing: border-box;
  min-width: ${({ wide }) => (wide ? '50%' : '100%')} !important;
  height: 5rem;
  background-color: ${({ theme: { colors } }) => colors.white};
  transition: border 150ms ease-out;
  -moz-appearance: textfield;
  text-overflow: ellipsis;

  &:focus {
    border-color: ${({ theme: { colors } }) => colors.primary} !important;
    background-color: ${({ theme: { colors } }) => colors.white};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme: { colors } }) => colors.textLighter};
  }
`;

/**
 * Styles for InputField Wrapper.
 */
export const InputWrapper = styled.div`
  display: inline-flex;
`;

/**
 * This styled will be applied while using Validations
 */
export const Icon = styled.span`
  display: inline-block;
  position: absolute;
  height: 4rem;
  width: 4rem;
  top: 0.3rem;
`;

/**
 * Styles for Input Label.
 */
export const InputLabel = styled.label`
  color: ${({ theme: { colors } }) => colors.textLight};
  font-size: 1.6rem;
  font-weight: 500 !important;
  margin-bottom: 1rem;
`;

/**
 * Error message container.
 */
export const ErrorMessageContainer = styled.fieldset`
  margin: 0.4rem 0 0.4rem 0;
  position: relative;
`;
