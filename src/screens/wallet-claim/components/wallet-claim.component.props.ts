/**
 * Props supported by overview screen
 *
 *Todo |- Add rest of the props.
 */

export interface walltClaimProps {
  shimmer?: boolean;
}

/**
 * Props supported by claim status component.
 */
export interface WalletClaimStatusProps {
  status: number;
  timestamp: number;
  claimType: number;
  claiming?: any;
}
