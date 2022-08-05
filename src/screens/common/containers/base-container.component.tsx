import React from 'react';
import { styled } from 'themes';
import { BaseContainerProps } from './base-container.component.props';

export const StyledContainer = styled.div`
	background-color: ${(props) => props.theme.colors.white};
	min-width: 60rem;
	padding: 5rem 8rem 5rem 8rem;
	border-radius: 5px;
`;

export const HeadingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 3rem;
`;

export const BaseFormContainer: React.FC<BaseContainerProps> = (props) => {
	const { children } = props;

	return <StyledContainer>{children}</StyledContainer>;
};
