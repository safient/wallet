import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RoutePath } from 'navigation/route-path';
import { useServices } from 'services';
import { useStores } from 'store';
import { observer } from 'mobx-react-lite';
import dayjs from "dayjs"
import { Box, NoticeLoader, Accordion, DateTimePicker } from 'components/primitive';
import {
  FormContainer,
  HomeScreenContainer,
  StyledButton,
  StyledInput,
  Title,
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
  const [walletBeneficiary, setWalletBeneficiary] = useState('');
  const [signalingPeriod, setSignalingPeriod] = useState(300);

  //Note new create a toggle button or something to change the type of safe. 
  const [claimType, setClaimType] = useState(2)
  const [DdayTime, setDdayTime] = useState(0);
  const [date, setDate] = useState(null)

  const createSafe = async () => {
    try {
      safeStore.setFetching(true);

      const wallet = await walletService.create();
      await walletService.info();

      if (wallet.hasData()) {
        const safe = await safeService.create(walletName, walletDescription, walletBeneficiary , wallet.data!.mnemonic, claimType, DdayTime );
        if (safe.hasData()) {
          await safeService.get(safe.data?.id!);
          history.push(RoutePath.walletOverview);
        } else {
          history.push(RoutePath.createWallet);
        }
      }

      safeStore.setFetching(false);
    } catch (e) {
      console.log(e);
    }
  };

  const dateConverter = (date: any) => {
      setDate(date)
      const presentTime = Date.now() / 1000;
      const futureTime = dayjs(date).valueOf() / 1000
      const timeDifference = futureTime - presentTime
      setDdayTime(Math.floor(timeDifference))
  }

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
      <Title variant='contentHeader' tx='common.createWallet' />

      <WalletCreateFormContainer>
        <FormContainer>
          <WalletCreateText variant='contentHeader' center tx='wallet.enterDetails' />

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
              placeholder='satoshi@safient.com'
              onChange={(e: any) => setWalletBeneficiary(e.target.value)}
            />
          </WalletCreateFormBox>

          <Accordion label='Advanced options'>
            <Box row hCenter marginTop={1} justify={'between'}>
              <Label>Signaling Period</Label>
              <SignnalingInput
                type='text'
                placeholder={signalingPeriod.toString()}
                onChange={(e: any) => setSignalingPeriod(parseInt(e.target.value))}
              />
            </Box>

            <DateTimePicker
              label='Select DDay Date'
              placeholder='DDay Date'
              value={date}
              onChange={(date: any) => dateConverter(date)}
            />
          </Accordion>

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
