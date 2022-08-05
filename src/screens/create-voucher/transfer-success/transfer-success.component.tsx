import { IconSvg, Text, Box, Alert, Button } from 'components/primitive';
import {
	BaseFormContainer,
	HeadingContainer,
} from 'screens/common/containers/base-container.component';
import { Heading, Steps } from '../create/create-voucher.componet.styles';
import { TransferSuccessContainer } from './transfer-success.component.styles';

export const TransferSuccess = () => {
	return (
		<TransferSuccessContainer>
			{' '}
			<HeadingContainer>
				<Heading>Create New Voucher</Heading>
				<Steps>Step 3/3</Steps>
			</HeadingContainer>
			<BaseFormContainer>
				<Box hCenter vCenter>
					<IconSvg name='check' size='xLarge' />
					<Text
						variant='contentHeader'
						text='Voucher created Successfully'
						color='success'
						center
						className='success-heading'
					/>

					<div className='data-table'>
						<ul>
							<li>
								<Text variant='small' text='Voucher Id' />
							</li>
							<li>
								<Text variant='contentHeader' text='2523156763526' />
							</li>
						</ul>

						<ul>
							<li>
								<Text variant='small' text='Title' />
							</li>
							<li>
								<Text variant='contentHeader' text='Doge to the Moon 🚀' />
							</li>
						</ul>
						<ul>
							<li>
								<Text variant='small' text='Amount' />
							</li>
							<li>
								<Text variant='contentHeader' text='$30' />
							</li>
						</ul>
						<ul>
							<li>
								<Text variant='small' text='Token ' />
							</li>
							<li>
								<Text variant='contentHeader' text='Doge' />
							</li>
						</ul>
					</div>

					<Alert
						variant='success'
						icon
						label={{
							text: 'Share the voucher ID or the link with the recipient',
						}}
					/>

					<Box marginTop={2}>
						<Button
							variant='primary'
							className='share-btn'
							onClick={() => ''}
							label={{ text: 'share' }}
						/>
					</Box>
				</Box>
			</BaseFormContainer>
		</TransferSuccessContainer>
	);
};
