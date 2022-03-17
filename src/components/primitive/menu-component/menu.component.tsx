// @ts-nocheck

import { useState } from 'react';
import Modal, { ModalProvider } from 'styled-react-modal';
import { Box } from '../box/box.component';
import { Text, Image, Navlink } from 'components/primitive';
import { FadingBackground, CloseModal, ModalButton } from '../generic-modal/generic-modal.component.style';
import styled, { keyframes } from 'styled-components';
import { ButtonComponentProps } from '../button/button.component.props';
import { TextComponentProps } from '../text/text.component.props';
import { StyledDiv } from 'screens/account/account.screen.styles';
import { IconSvg } from '../icon-svg/icon-svg.component';
import { GenericModalComponentProps } from './menu.component.props';
import { BreakPoints } from 'utils';

export const StyledModal = Modal.styled`
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  transition : all 0.3s ease-in-out;
  position: absolute;
  border-radius: 0.5rem;
  top:10% ;
  right:10%;
`;

export const MenuContainer = styled(Box)`
  position: relative !important;
`;

export const NameContainer = styled.section`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
`;

/**
 * Styling for NavLabelContainer.
 */
export const NavLabelContainer = styled(Box)`
  /* padding: 1rem !important; */
  @media screen and (max-width: ${BreakPoints.medium}) {
    /* padding: 0 !important; */
    display: flex;
    flex-direction: row !important;
    justify-content: space-evenly;
  }
`;

/**
 * Styling for NavLabel.
 */
export const NavLabel = styled(Navlink)`
  display: flex;
  flex-direction: row !important;
  /* margin: 0.2rem !important; */
`;

export const Menu: React.FC<GenericModalComponentProps> = (props) => {
  const { show, onClose, noClose } = props;

  const [isOpen, setIsOpen] = useState(show);
  const [opacity, setOpacity] = useState(0);

  const toggleModal = (e: any) => {
    setOpacity(0);
    setIsOpen(!isOpen);
    if (onClose) onClose();
  };

  const handleClose = () => {
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
          <MenuContainer>
            <NameContainer>
              <Image name='add' rounded width={4.4} />

              <div>
                <Text variant='small' text='Koushith' color='textLight' />
                <Text variant='small' text='@koushith' color='textLighter' />
              </div>
            </NameContainer>
            <NavLabelContainer>
              <NavLabel icon={{ name: 'add' }} label={{ text: 'something' }} />
              <NavLabel icon={{ name: 'add' }} label={{ text: 'something' }} />
              <NavLabel icon={{ name: 'add' }} label={{ text: 'something' }} />
            </NavLabelContainer>
          </MenuContainer>
        </StyledModal>
      </ModalProvider>
    </MenuContainer>
  );
};
