import { ImageComponentProps } from 'components/primitive/image/image.component.props';
import { Image } from 'components/primitive';
import styled from 'styled-components';
import { BreakPoints } from 'utils';

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
      font-size: 2.6rem;
      line-height: 3.8rem;
      background: linear-gradient(89.58deg, #44bcf0 -19.85%, #818cf8 54.07%, #a099ff 120.75%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
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

  .preview-image {
    width: 35rem;
    box-shadow: 0px 16px 32px rgb(221 230 237 / 40%);
  }

  @media screen and (max-width: ${BreakPoints.small}) {
    display: flex;
    align-items: center;

    padding: 1rem;

    .preview {
      padding: 1rem;
    }
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
        <Image {...preview} className='preview-image' />
      </div>
    </StepsContainer>
  );
};
