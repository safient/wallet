import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NoticeLoader } from 'components/primitive';
import {
  FormContainer,
  HomeScreenContainer,
  StyledButton,
  StyledInput,
  Title,
  WalletCreateFormContainer,
  WalletCreateFormBox,
  WalletCreateText,
} from './create-wallet.screen.styles';

import { RoutePath } from 'navigation/route-path';
import { useServices } from 'services';
import { useStores } from 'store';
import { observer } from 'mobx-react-lite';

export const CreateWalletScreen = observer(() => {
  const { safeService, walletService } = useServices();
  const { safeStore } = useStores();
  let history = useHistory();

  const [walletName, setWalletName] = useState('');
  const [walletDescription, setWalletDescription] = useState('');
  const [walletBeneficiary, setWalletBeneficiary] = useState('');

  const createSafe = async () => {
    try {
      safeStore.setFetching(true);

      const wallet = await walletService.create();
      await walletService.info();

      if (wallet.hasData()) {
        const safe = await safeService.create(walletName, walletDescription, walletBeneficiary , wallet.data!.mnemonic, false);
        if (safe.hasData()) {
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

  return (
    <HomeScreenContainer>
      {safeStore.fetching && (
        <NoticeLoader

          label={{ tx: "wallet.creatingLabel" }}

          helperText={{
            text: 'Please sign the signature if prompted. This may take a few seconds ...',
          }}
        />
      )}
      <Title variant='contentHeader' tx='common.createWallet' />

      <WalletCreateFormContainer>
        <FormContainer>
          <WalletCreateText variant='contentHeader' center tx='wallet.enterDetails' />

          <WalletCreateFormBox>
            <StyledInput
              type='text'
              label='Wallet Name'
              placeholder='John Doe Wallet'
              onChange={(e: any) => {
                setWalletName(e.target.value);
              }}
            />
            <StyledInput
              type='text'
              label='Wallet Description'
              placeholder='John Doe Wallet Details'
              onChange={(e: any) => setWalletDescription(e.target.value)}
            />
            <StyledInput
              type='text'
              label='Beneficiary'
              placeholder='johndoe@safient.com'
              onChange={(e: any) => setWalletBeneficiary(e.target.value)}
            />
          </WalletCreateFormBox>

          <StyledButton

            variant="primary"
            label={{ text: safeStore.fetching ? "Creating.." : "Create 🙌" }}

            onClick={createSafe}
            color='primaryGradient'
          />
        </FormContainer>
      </WalletCreateFormContainer>
    </HomeScreenContainer>
  );
});
