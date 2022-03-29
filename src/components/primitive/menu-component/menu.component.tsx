// @ts-nocheck
import { useState } from 'react';
import { RoutePath } from 'navigation/route-path';
import { ModalProvider } from 'styled-react-modal';
import { Text, Image, Box } from 'components/primitive';
import { FadingBackground } from '../generic-modal/generic-modal.component.style';
import { NameContainer, StyledModal, NavLabelContainer, MenuContainer } from './menu.component.styles';
import { IconSvg } from '../icon-svg/icon-svg.component';
import { MenuComponentProps } from './menu.component.props';
import { useHistory } from 'react-router-dom';
import { useStores } from 'store';

export const Menu = (props: any) => {

  const history = useHistory()
  const { accountStore } = useStores();
  const { show, onClose, noClose } = props;
  const [isOpen, setIsOpen] = useState(show);
  const [opacity, setOpacity] = useState(0);

  const toggleModal = (e: any) => {
    setOpacity(0);
    setIsOpen(!isOpen);
    if (onClose) onClose();
  };

  const afterOpen = () => {
    setOpacity(1);
  };

  const beforeClose = () => {
    setOpacity(0);
  };

  return (
    <MenuContainer>
      <ModalProvider backgroundComponent={FadingBackground}>
        <StyledModal
          isOpen={isOpen}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          onBackgroundClick={noClose ? () => {} : toggleModal}
          onEscapeKeydown={noClose ? () => {} : toggleModal}
          backgroundProps={{ opacity }}
        >
          <NameContainer>
            <Image name='user' rounded width={4.4} />
            <Box>
              <Text variant='small' text={accountStore.safientUser.name} color='textLight' />
              <Text variant='small' text={accountStore.safientUser.email} color='textLighter' />
            </Box>
          </NameContainer>
          <NavLabelContainer>
            <Box row gap={1} hCenter onClick={()=> history.push(RoutePath.account)}>
              <IconSvg name='user' />
              <Text variant='small' tx='menuComponent.profile' />
            </Box>

            <Box row gap={1} hCenter onClick={()=> history.push(RoutePath.login)}>
              <IconSvg name='logout' />
              <Text variant='small' tx='menuComponent.logout' />
            </Box>
          </NavLabelContainer>
        </StyledModal>
      </ModalProvider>
    </MenuContainer>
  );
};
