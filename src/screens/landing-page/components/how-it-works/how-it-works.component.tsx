import { Box } from 'components/primitive';
import { Title } from './how-it-works.component.styles';
import { Steps } from './steps.component';

export const HowItWorks = () => {
  return (
    <>
      {' '}
      <Box marginTop={8}>
        <Title variant='title' text='How It works?' center />
        <Steps
          title='1. Create a claimable wallet'
          description='Create a new crypto wallet with one click. You can add a beneficiary and select a recovery/ claim method while creating the wallet so that you do not need to worry about backing up your seed phrases or any recovery strategy.'
          preview={{ name: 'createWallet' }}
        />
        <Steps
          inverted
          title='2. Claim your wallet'
          description='Whenever you lose access to your device or incase your beneficiary needs to access the wallet, claim can be created with just one click.'
          preview={{ name: 'claimWallet' }}
        />
        <Steps
          title='3. Access your wallet after the quick recovery'
          description='Once the claim conditions are met, the wallet will be recovered in no time so that you can get quick access to it without any worry.'
          preview={{ name: 'accessWallet' }}
        />
      </Box>
    </>
  );
};
