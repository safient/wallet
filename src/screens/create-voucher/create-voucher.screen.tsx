import { CreateVoucherScreenContainer } from './create-voucher.screen.styles';
import { CreateVoucher } from './create/create-voucher.component';
import { TransferFund } from './transfer-fund/transfer-fund.component';
import { TransferSuccess } from './transfer-success/transfer-success.component';

export const CreateVoucherScreen = () => {
	return (
		<CreateVoucherScreenContainer>
			<CreateVoucher />
			{/* <TransferFund />
			<TransferSuccess /> */}
		</CreateVoucherScreenContainer>
	);
};
