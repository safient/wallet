export enum WalletStatus {
  
  active = 'active',
  locked= 'locked',
  pending = 'pending'

}

export enum IconName {
  locked = 'locked',
  pending = 'warningAlert',
  active = 'successAlert',
}

/**
 * Props supported by SafeCard component.
 */
export interface WalletCardProps {
  walletName: string;
  roleName: string;
  status: keyof typeof WalletStatus;
  
}
