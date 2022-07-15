import { Button } from 'components/primitive';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Blob from '../../../../assets/images/blob-2.svg';

export const CtaContainer = styled.section`
  position: relative;
  background: linear-gradient(89.58deg, #1f1d31 -33.5%, #25225c 37.2%, #402c2c 117.54%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  h3 {
    font-size: 2.2rem;
  }
  p {
    font-size: 1.8rem;
    line-height: 3rem;
    margin-bottom: 2rem;
  }

  .cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CtaSection = () => {
  const history = useHistory();
  return (
    <CtaContainer>
      <div className='cta'>
        <p>What are you waiting for?</p>
        <Button
          onClick={() => history.push('/')}
          variant='primary'
          color='primaryGradient'
          label={{ text: 'Try Now' }}
        />
      </div>
    </CtaContainer>
  );
};
