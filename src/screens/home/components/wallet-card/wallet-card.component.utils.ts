import { WalletStatus, IconName } from './wallet-card.component.props';

/**
 *
 * @param variant
 * @returns style based on Variant passed by user.
 */

export const getStatusInfo = (status: keyof typeof WalletStatus = WalletStatus.active) => {
  let text, iconName;

  switch (status) {
    case WalletStatus.active:
      text = 'Active';
      iconName = IconName.active;
      break;

    case WalletStatus.locked:
      text = 'Locked';
      iconName = IconName.locked;
      break;

    case WalletStatus.pending:
      text = 'Pending';
      iconName = IconName.pending;
      break;

    default:
      text = 'Active';
      iconName = IconName.active;
  }

  return { text, iconName };
};
