import { WalletStatus, IconName, UserRole, Color } from './wallet-card.component.props';

/**
 *
 * @param variant
 * @returns style based on Variant passed by user.
 */

export const getStatusInfo = (status: keyof typeof WalletStatus = WalletStatus.active) => {
  let text, iconName, color;

  switch (status) {
    case WalletStatus.active:
      text = 'Active';
      color = Color.active;
      iconName = IconName.active;
      break;

    case WalletStatus.locked:
      text = 'Locked';
      color = Color.locked;
      iconName = IconName.locked;
      break;

    case WalletStatus.pending:
      text = 'Pending';
      color = Color.pending;
      iconName = IconName.pending;
      break;

    default:
      text = 'Active';
      color = Color.active;
      iconName = IconName.active;
  }

  return { text, iconName, color };
};

export const getUserInfo = (status: keyof typeof UserRole = UserRole.creator) => {
  let text, iconName;

  switch (status) {
    case UserRole.creator:
      text = 'Creator';
      iconName = IconName.avatar;
      break;

    case UserRole.beneficiary:
      text = 'Beneficiary';
      iconName = IconName.avatar;
      break;

    case UserRole.guardian:
      text = 'Guardian';
      iconName = IconName.avatar;
      break;

    default:
      text = 'Creator';
      iconName = IconName.avatar;
  }

  return { text, iconName };
};
