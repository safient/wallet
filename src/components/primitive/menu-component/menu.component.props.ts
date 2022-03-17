import { ButtonComponentProps } from '..';
import { TextComponentProps } from '../text/text.component.props';

export interface GenericModalComponentProps {
  /**
   * to determine if modal should show
   */
  show: boolean;

  /**
   * method to close the modal
   */
  onClose?: () => void;

  /**
   * title of the modal
   */
  title?: TextComponentProps;

  /**
   * button for submit
   */
  onSubmit?: ButtonComponentProps;

  /**
   * button for cancel
   */
  onCancel?: ButtonComponentProps;

  /**
   * hide the buttons and close button
   */
  hide?: boolean;

  /**
   * should modal close if background is clicked
   */
  noClose?: boolean;
}
