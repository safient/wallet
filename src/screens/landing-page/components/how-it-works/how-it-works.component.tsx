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
          title='Step 1 - Create wallet and Add Benificery'
          description='Rught after loggin you can create a new wallet by clicking create option and fillout the details. add the benificery and additionally you can topup the wallet from one of your pre existing wallets.'
        />
        <Steps
          inverted
          title='Step 2 - Wallet OverView'
          description='If you are a benificery you can click on claim. it may take upto 2-3 minutes depending on the network connectivity.'
        />
        <Steps
          title='Step 3 - Send, Recieve'
          description='This is pretty standard stuff. you can send or recieve the funds. you can also share the QR code to recieve the funds'
        />
      </Box>
    </>
  );
};
