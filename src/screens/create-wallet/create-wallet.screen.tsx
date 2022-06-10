import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RoutePath } from 'navigation/route-path';
import { useServices } from 'services';
import { useStores } from 'store';
import { observer } from 'mobx-react-lite';
import dayjs from 'dayjs';

import { Box, NoticeLoader, Accordion, DateTimePicker, IconSvg, DropDown, Alert } from 'components/primitive';
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

export const CreateWalletScreen = observer(() => {
  const { safeService, walletService } = useServices();
  const { safeStore } = useStores();
  let history = useHistory();

  const [walletName, setWalletName] = useState('');
  const [walletDescription, setWalletDescription] = useState('');
  const [walletBeneficiary, setWalletBeneficiary] = useState(safeService.getDefaultConfig()?.beneficiary);
  const [signalingPeriod, setSignalingPeriod] = useState(300);
  const [claimType, setClaimType] = useState(0);
  const [DdayTime, setDdayTime] = useState(0);
  const [date, setDate] = useState(null);
  const [error, setError] = useState({
    hasError: false,
    errorMessage: '',
  });

  const backButtonHandler = () => {
    history.goBack();
  };

  const createSafe = async () => {
    try {
      safeStore.setFetching(true);

      const wallet = await walletService.create();

      await walletService.info();

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

        if (safe.hasData()) {
          await safeService.get(safe.data?.id!);
          history.push(RoutePath.walletOverview);
        } else {
          history.push(RoutePath.createWallet);
        }

        if (safe.hasError()) {
          const errorMessage = safe.getErrorMessage();
          setError({
            hasError: true,
            errorMessage,
          });
        }
      }

      safeStore.setFetching(false);
    } catch (e: any) {
      console.log(e);
    }
  };

  const claimTypes = [
    {
      value: 0,
      label: 'Signaling (You can send a signal when claimed)',
    },
    {
      value: 1,
      label: 'Arbitration (Arbitrators decide the claim)',
    },
    {
      value: 2,
      label: 'DDay (Claim on the exact date)',
    },
  ];

  const getClaimName = (type: number) => {
    return claimTypes.find((claimType) => claimType.value === type);
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
        {error.hasError && <Alert label={{ text: error.errorMessage }} variant={'error'} icon />}
      </Box>

      <WalletCreateFormContainer>
        <FormContainer>
          <Box row vCenter>
            <Box onClick={backButtonHandler} flex={1} marginTop={0.3}>
              <IconSvg name='arrowLeft' />
            </Box>
            <Box flex={5} vCenter>
              <WalletCreateText variant='contentHeader' center tx='common.createWallet' />
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
            />
            <StyledInput
              type='text'
              label='Wallet Description'
              placeholder='Satoshi Wallet Details'
              onChange={(e: any) => setWalletDescription(e.target.value)}
            />
            <StyledInput
              type='text'
              label='Beneficiary'
              placeholder={'satoshi@safient.com'}
              value={walletBeneficiary}
              onChange={(e: any) => setWalletBeneficiary(e.target.value)}
            />
          </WalletCreateFormBox>

          <Accordion label='Advanced options'>
            <Box marginTop={2}>
              <Label>Select Network</Label>
              <DropDown
                placeholder='select network'
                value={getClaimName(claimType)?.label}
                options={claimTypes}
                onChange={(e: any) => setClaimType(e.value)}
              />
            </Box>

            {claimType === 0 && (
              <Box row hCenter marginTop={1} justify={'between'}>
                <Label>Signaling Period</Label>
                <SignnalingInput
                  type='text'
                  placeholder={signalingPeriod.toString()}
                  onChange={(e: any) => setSignalingPeriod(parseInt(e.target.value))}
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
          </Accordion>

          <Box marginTop={2}>
            <Alert
              variant='info'
              icon
              label={{
                text: 'This will create a wallet using signaling method with 300 sec signaling period. Click on "Advanced options" to update',
              }}
            />
          </Box>

          <StyledButton
            variant='primary'
            label={{ text: safeStore.fetching ? 'Creating..' : 'Create 🙌' }}
            onClick={createSafe}
            color='primaryGradient'
          />
        </FormContainer>
      </WalletCreateFormContainer>
    </HomeScreenContainer>
  );
});
