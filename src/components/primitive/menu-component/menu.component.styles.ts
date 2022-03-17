import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { BreakPoints } from 'utils';
import { Box } from '../box/box.component';

export const StyledModal = Modal.styled`
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
  transition : all 0.3s ease-in-out;
  position: absolute;
  border-radius: 0.5rem;
  top:10% ;
  right:23%;
  transition: all 5s ease-in-out !important;
`;

export const MenuContainer = styled(Box)`
  position: relative !important;
`;

export const NameContainer = styled.section`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
`;

export const NavLabelContainer = styled(Box)`
  margin-top: 2rem !important;
  gap: 1rem;
  cursor: pointer;
  @media screen and (max-width: ${BreakPoints.medium}) {
    display: flex;
    flex-direction: row !important;
    justify-content: space-evenly;
  }
`;
