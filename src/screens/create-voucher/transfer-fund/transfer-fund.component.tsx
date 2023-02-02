import { Alert, Box, Button, Text, Image, IconSvg } from 'components/primitive';
import { HeadingContainer } from 'screens/common/containers/base-container.component';
import { Heading, Steps } from '../create/create-voucher.componet.styles';
import {
	StyledButton,
	TeansferFundContainer,
	TransferFundInner,
} from './transfer-fund.component.styles';
// @ts-ignore
import QRCode from '../../common/qr-code.png';

export const TransferFund = () => {
	return (
		<TeansferFundContainer>
			<HeadingContainer>
				<Heading>Create New Voucher</Heading>
				<Steps>Step 2/2</Steps>
			</HeadingContainer>
			<TransferFundInner>
				<Text
					variant='contentHeader'
					text='Transfer Fund'
					color='textLight'
					center
				/>
				<Box hCenter vCenter padding={2}>
					<Image src={QRCode} height={20} width={20} />

					<Box marginTop={2} hCenter vCenter>
						<Text
							variant='small'
							text='3FjsdfQZu51LMW7Kka4uGX2eVAxt2wwqrm'
							color='textLight'
							center
						/>
						<IconSvg
							name='copy'
							color='textLighter'
							size='large'
							className='copy'
						/>
					</Box>
				</Box>
				{/* conditional rendering goes here */}
				<Alert
					variant='info'
					label={{ text: 'Waiting to receive 0.1 Bitcoin' }}
					icon
				/>
				{/* <Alert
					variant='success'
					label={{ text: 'Successfully received 0.1 Bitcoin' }}
					icon
				/> */}
				<div className='next-button-container'>
					<StyledButton
						className='next-button'
						variant='primary'
						label={{ text: 'Next' }}
						disabled
						onClick={() => ''}
					/>
				</div>
			</TransferFundInner>
		</TeansferFundContainer>
	);
};
