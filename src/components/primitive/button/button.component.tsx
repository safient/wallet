// @ts-nocheck - no overload matched this call
import styled from 'styled-components';
import { IconSvg } from 'components/primitive';
import {
	PrimaryButton,
	SmallButton,
	GhostButton,
	IconWrapper,
	ButtonText,
	Spinner,
	ButtonContainer,
} from './button.component.styles';
import { ButtonComponentProps, Variant } from './button.component.props';

export const Button: React.FunctionComponent<ButtonComponentProps> = (
	props: ButtonComponentProps
) => {
	const {
		variant,
		label,
		icon,
		loading,
		onClick,
		disabled,
		className,
		...rest
	} = props;

	const getVariant = (variant: Variant = Variant.primary) => {
		let ButtonComponent;
		switch (variant) {
			case Variant.primary:
				ButtonComponent = PrimaryButton;
				break;
			case Variant.small:
				ButtonComponent = SmallButton;
				break;
			case Variant.ghost:
				ButtonComponent = GhostButton;
				break;

			default:
				ButtonComponent = PrimaryButton;
		}
		return ButtonComponent;
	};

	const StyledButton = getVariant(Variant[variant]);

	/**
	 * custom styling goes here.
	 */
	const StyledButtonComponent = styled(StyledButton)<ButtonComponentProps>`
		background: ${({ color, disabled, theme: { colors } }) =>
			disabled ? colors.primaryDisabled : color && colors[color]} !important;

		pointer-events: ${({ disabled }) => disabled && 'none'}!important;
	`;

	return (
		<ButtonContainer>
			<StyledButtonComponent
				row
				vCenter
				hCenter
				disabled={disabled}
				className={className}
				onClick={onClick}
				{...rest}
			>
				{icon && (
					<IconWrapper>
						<IconSvg {...icon} />
					</IconWrapper>
				)}
				{loading && <Spinner />} <ButtonText {...label} />
			</StyledButtonComponent>
		</ButtonContainer>
	);
};
