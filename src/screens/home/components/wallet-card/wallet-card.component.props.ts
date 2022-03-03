export enum WalletStatus {
  
  active = 'active',
  locked= 'locked',
  pending = 'pending'

}

export enum UserRole {
  
  creator = 'creator',
  beneficiary= 'beneficiary',
  guardian = 'guardian'

}

export enum IconName {
  locked = 'locked',
  pending = 'warningAlert',
  active = 'successAlert',
  avatar = 'avatar'
}

export enum Color {
  pending = 'warningLight',
  locked = 'errorLight',
  active = 'successLight',
}

/**
 * Props supported by SafeCard component.
 */
export interface WalletCardProps {
  walletName: string;
  roleName: keyof typeof UserRole;
  status: keyof typeof WalletStatus;
  
}
