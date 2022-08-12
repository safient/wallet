// @ts-nocheck - no overload matched this call error.
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RoutePath } from 'navigation/route-path';
import { useServices } from 'services';
import { useStores } from 'store';
import { observer } from 'mobx-react-lite';
import dayjs from 'dayjs';

import {
	Box,
	NoticeLoader,
	Accordion,
	DateTimePicker,
	IconSvg,
	DropDown,
	Alert,
	ToggleSwitch,
	Text,
} from 'components/primitive';
import {
	FormContainer,
	HomeScreenContainer,
	StyledButton,
	StyledInput,
	WalletCreateFormContainer,
	WalletCreateFormBox,
	WalletCreateText,
	Label,
	SignnalingInput,
} from './create-wallet.screen.styles';
import { claimTypes, getClaimName } from 'utils';
import { FormValidator } from 'utils/FormValidator';

export const CreateWalletScreen = observer(() => {
	const { safeService, walletService } = useServices();
	const { safeStore, accountStore } = useStores();
	let history = useHistory();

	const [walletName, setWalletName] = useState('');
	const [walletDescription, setWalletDescription] = useState('');

	const [walletBeneficiary, setWalletBeneficiary] = useState(
		safeService.getDefaultConfig()?.beneficiary
	);
	const [signalingPeriod, setSignalingPeriod] = useState(300);

	const [claimType, setClaimType] = useState();
	const [DdayTime, setDdayTime] = useState(0);

	const [date, setDate] = useState(null);
	const [isTopupToggleChecked, setIsTopupToggleChecked] = useState(false);

	const [topupValue, setTopupValue] = useState<any>('');

	const [selectWallet, setSelectWallet] = useState([]);
	const [options, setOptions] = useState(selectWallet);

	const [seedPhrase, setSeedPhrase] = useState<any>('');
	const [balanceLoader, setBalanceLoader] = useState(false);

	const [errorMessage, setErrorMessage] = useState('');
	const [validator, setValidator] = useState(false);

	const [isBeneficiaryChecked, setIsBeneficiaryChecked] = useState(false);
	const [claimToggle, setClaimToggle] = useState(false);

	const getAllWallets = async () => {
		const wallets = await accountStore.safientUser?.safes.map((safes) => ({
			label: safes.safeName,
			value: safes.safeId,
		}));

		setSelectWallet(wallets);
	};

	const loadBalance = async () => {
		setBalanceLoader(true);
		safeStore.setRole('creator');
		const safeData = await safeService.recover(options, 'creator');

		setSeedPhrase(safeData.data?.seedPhrase);
		if (safeData.hasData()) {
			if (safeData.data?.seedPhrase)
				await walletService.load(safeData.data?.seedPhrase);
		}

		setBalanceLoader(false);
	};

	useEffect(() => {
		if (walletName || walletDescription || walletBeneficiary) {
			setValidator(false);
		}
	}, [walletBeneficiary, walletDescription, walletName]);

	const backButtonHandler = () => {
		history.goBack();
	};

	const createSafe = async () => {
		if (!walletName || !walletDescription) {
			setValidator(true);
		} else {
			setValidator(false);
			try {
				if (safeStore.walletInfo?.balance.eth > topupValue) {
					alert('topup value should be less than value');
				}
				safeStore.setFetching(true);

				const wallet = await walletService.create();

				let topupAddress = wallet.data?.address;

				await walletService.info();
				await walletService.load(seedPhrase);
				await walletService.send(topupAddress, topupValue);

				if (wallet.hasData()) {
					const safe = await safeService.create(
						walletName,
						walletDescription,
						walletBeneficiary,
						wallet.data!.mnemonic,
						claimType,
						signalingPeriod,
						DdayTime,
						true
					);

					await walletService.load(wallet.data!.mnemonic);

					if (safe.hasData()) {
						await safeService.get(safe.data?.id!);
						history.push(RoutePath.walletOverview);
					} else {
						history.push(RoutePath.createWallet);
					}

					if (safe.hasError()) {
						setErrorMessage(
							`Something went wrong while creating the wallet. ${safe.getErrorMessage()}`
						);
					}
				}

				safeStore.setFetching(false);
			} catch (e: any) {
				console.log(e);
			}
		}
	};

	const dateConverter = (date: any) => {
		setDate(date);
		const presentTime = Date.now() / 1000;
		const futureTime = dayjs(date).valueOf() / 1000;
		const timeDifference = futureTime - presentTime;
		setDdayTime(Math.floor(timeDifference));
	};

	return (
		<HomeScreenContainer>
			{safeStore.fetching && (
				<NoticeLoader
					label={{ tx: 'wallet.creatingLabel' }}
					helperText={{
						text: 'Please sign the signature if prompted. This may take a few seconds ...',
					}}
				/>
			)}
			<Box hCenter vCenter>
				{errorMessage.length > 0 && (
					<Alert label={{ text: errorMessage }} variant={'error'} icon />
				)}
			</Box>

			<WalletCreateFormContainer>
				<FormContainer>
					<Box row vCenter>
						<Box onClick={backButtonHandler} flex={1} marginTop={0.3}>
							<IconSvg name='arrowLeft' />
						</Box>
						<Box flex={5} vCenter>
							<WalletCreateText
								variant='contentHeader'
								center
								tx='common.createWallet'
							/>
						</Box>
					</Box>
					<WalletCreateFormBox marginBottom={2}>
						<StyledInput
							type='text'
							label='Wallet Name'
							placeholder='Satoshi Wallet'
							onChange={(e: any) => {
								setWalletName(e.target.value);
							}}
							error={validator}
							errorMsg='Please Enter a Valid Wallet Name'
						/>
						<StyledInput
							type='text'
							label='Wallet Description'
							placeholder='Satoshi Wallet Details'
							onChange={(e: any) => setWalletDescription(e.target.value)}
							error={validator}
							errorMsg='Please Enter the Description'
						/>
					</WalletCreateFormBox>

					{/* bebeficiary */}

					<Box row hCenter marginTop={3} justify={'between'}>
						<Text variant='small' text={'Add a Beneficaiary '} bold600 />
						<ToggleSwitch
							toggleID={'beneficiary'}
							checked={isBeneficiaryChecked}
							onChange={(e: any) => {
								setIsBeneficiaryChecked(!isBeneficiaryChecked);
								getAllWallets();
							}}
						/>
					</Box>

					{isBeneficiaryChecked && (
						<Box marginTop={2}>
							<StyledInput
								type='text'
								label='Beneficiary Email or DID'
								placeholder={'satoshi@safient.com'}
								value={walletBeneficiary}
								onChange={(e: any) => setWalletBeneficiary(e.target.value)}
								errorMsg={'Enter a Valid Email ID'}
								error={validator}
							/>
						</Box>
					)}

					{/* claim type */}

					<Box row hCenter marginTop={3} justify={'between'}>
						<Text variant='small' text={'Add a Claim Type '} bold600 />
						<ToggleSwitch
							toggleID={'selectClaimType'}
							checked={claimToggle}
							onChange={(e: any) => {
								setClaimToggle(!claimToggle);
							}}
						/>
					</Box>

					{claimToggle && (
						<>
							<Box marginTop={2}>
								<Alert
							variant='info'
							icon
							label={{
								text: 'This will create a wallet using signaling method with 300 sec signaling period. Click on "Advanced options" to update',
							}}
						/>
							</Box>
							<Box marginTop={2}>
								<Label>Select Claim Type</Label>
								<DropDown
									placeholder='select network'
									value={getClaimName(claimType)?.label}
									options={claimTypes}
									onChange={(e: any) => setClaimType(e.value)}
								/>
							</Box>

							{claimType === 0 && (
								<Box row hCenter marginTop={2} justify={'between'}>
									<Label>Signaling Period</Label>
									<SignnalingInput
										type='text'
										placeholder={signalingPeriod.toString()}
										onChange={(e: any) =>
											setSignalingPeriod(parseInt(e.target.value))
										}
									/>
								</Box>
							)}
							{claimType === 2 && (
								<DateTimePicker
									label='Select DDay Date (Seconds)'
									placeholder='DDay Date'
									value={date}
									onChange={(date: any) => dateConverter(date)}
								/>
							)}
						</>
					)}

					{/* topup */}
					<Box row hCenter marginTop={3} justify={'between'}>
						<Text variant='small' text={'Top up the wallet '} bold600 />
						<ToggleSwitch
							toggleID={'topup'}
							checked={isTopupToggleChecked}
							onChange={(e: any) => {
								setIsTopupToggleChecked(!isTopupToggleChecked);
								getAllWallets();
							}}
						/>
					</Box>

					{isTopupToggleChecked && (
						<>
							<Box marginTop={2}>
								<Label>Select the wallet</Label>
								<DropDown
									placeholder='Select the wallet'
									value={options}
									options={selectWallet}
									onChange={(e: any) => {
										setOptions(e.value);
										loadBalance();
									}}
								/>
							</Box>

							{balanceLoader ? (
								<Box marginTop={1}>
									<Label>Loading Wallet Balance...</Label>
								</Box>
							) : (
								<Box marginTop={1}>
									<Label>
										Wallet's Balance is{' '}
										{`${safeStore.walletInfo?.balance.eth} ETH`}
									</Label>
								</Box>
							)}

							<Box row hCenter marginTop={2} justify={'between'}>
								<Label>Enter Value</Label>
								<StyledInput
									type='text'
									placeholder={'Enter the value'}
									value={topupValue}
									onChange={(e: any) => setTopupValue(e.target.value)}
								/>
							</Box>
						</>
					)}

					<StyledButton
						variant='primary'
						label={{ text: safeStore.fetching ? 'Creating..' : 'Create 🙌' }}
						onClick={createSafe}
						color='primaryGradient'
						disabled={validator}
					/>
				</FormContainer>
			</WalletCreateFormContainer>
		</HomeScreenContainer>
	);
});
