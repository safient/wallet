import styled from 'styled-components';
import { Button, Text } from 'components/primitive';

export const VoucherCreateText = styled(Text)`
	margin-bottom: 6rem;
	transform: translate(-10%);
`;

export const CreateButton = styled(Button)`
	width: 100%;
`;

export const CreateVoucherContainer = styled.div`
	display: flex;
	flex-direction: column;

	.form-group {
		margin-bottom: 2rem;
	}
`;

export const Heading = styled(Text)`
	font-weight: 600;
	font-size: 2rem;
	color: #555770;
`;

export const Steps = styled(Text)`
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	color: #626e99;
`;
