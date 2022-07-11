import { ImageComponentProps } from 'components/primitive/image/image.component.props';
import { Image } from 'components/primitive';
import styled from 'styled-components';

export const StepsContainer = styled.section<StepsComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin: 8rem 0 4rem 0;
  flex-wrap: wrap;
  .steps {
    flex: 1;
    order: ${({ inverted }) => (inverted ? '2' : '0')};
    h3 {
      font-weight: 600;
      font-size: 26px;
      line-height: 38px;
      color: #0f172a;
    }

    p {
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #555770;
      margin-top: 2rem;
    }
  }

  .preview {
    flex: 1;
  }
`;

interface StepsComponentProps {
  inverted?: boolean;
  title: string;
  description: string;
  preview?: ImageComponentProps;
}

export const Steps: React.FC<StepsComponentProps> = ({ inverted, preview, title, description }) => {
  return (
    //@ts-ignore
    <StepsContainer inverted={inverted}>
      <div className='steps'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className='preview'>
        <Image name='landingPage' />
      </div>
    </StepsContainer>
  );
};
