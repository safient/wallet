import { StyledContainer } from '../../common/containers/base-container.component';
import styled from 'styled-components';
import { Button } from 'components/primitive';

export const TeansferFundContainer = styled.div`
	/* position: relative; */
`;

export const TransferFundInner = styled(StyledContainer)`
	padding: 5rem 8rem 5rem 8rem;

	.next-button-container {
		margin-top: 2rem;
	}

	.copy {
		cursor: pointer;
	}
`;

export const StyledButton = styled(Button)`
	width: 100% !important;
	margin-top: 2rem;
`;
