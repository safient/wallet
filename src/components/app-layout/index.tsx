import { TopBar } from 'components/primitive';
import { AppLayoutProps } from './app-layout.component.props';
import { AppContainer, Content, ContentWrapper } from './app-layout.component.styles';

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <AppContainer>
      <ContentWrapper>
        <TopBar />
        <Content>{children}</Content>
      </ContentWrapper>
    </AppContainer>
  );
};
