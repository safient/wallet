import {
	Box,
	DropDown,
	DateTimePicker,
	Alert,
	TextArea,
} from 'components/primitive';

import {
	BaseFormContainer,
	HeadingContainer,
} from 'screens/common/containers/base-container.component';
import { StyledInput } from 'screens/create-wallet/create-wallet.screen.styles';

import {
	CreateButton,
	CreateVoucherContainer,
	Heading,
	Steps,
} from './create-voucher.componet.styles';

export const CreateVoucher = () => {
	return (
		<CreateVoucherContainer>
			<HeadingContainer>
				<Heading>Create New Voucher</Heading>
				<Steps>Step 1/2</Steps>
			</HeadingContainer>
			<BaseFormContainer>
				<Box marginBottom={2} gap={2}>
					<DropDown
						label='Select Currency'
						placeholder='Select Currency '
						errorMsg='Please Enter a Valid Wallet Name'
						onChange={() => {}}
					/>
					<StyledInput
						type='text'
						label='Enter Amount'
						placeholder='Enter the Value'
					/>
					<TextArea
						wide
						label='Description (Optional)'
						placeholder={'lalala'}
					/>
					<Box marginTop={-2}>
						<DateTimePicker
							label='Select Access Date'
							placeholder='DDay Date'
							value={undefined}
							onChange={() => {}}
						/>
					</Box>
				</Box>

				<Box marginTop={2}>
					<Alert
						variant='info'
						icon
						label={{
							text: 'Right after creating the voucher, you need to transfer the Token',
						}}
					/>
				</Box>
				<Box marginTop={2}>
					<CreateButton
						variant='primary'
						label={{ text: 'Create' }}
						onClick={() => {}}
					/>
				</Box>
			</BaseFormContainer>
		</CreateVoucherContainer>
	);
};
