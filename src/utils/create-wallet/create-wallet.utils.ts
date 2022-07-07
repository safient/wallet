export const claimTypes = [
  {
    value: 0,
    label: 'Signaling (You can send a signal when claimed)',
  },
  {
    value: 1,
    label: 'Arbitration (Arbitrators decide the claim)',
  },
  {
    value: 2,
    label: 'DDay (Claim on the exact date)',
  },
];

export const getClaimName = (type: number) => {
  return claimTypes.find((claimType) => claimType.value === type);
};
