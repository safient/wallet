// @ts-nocheck
import { IconSvg } from '../icon-svg/icon-svg.component';
import { BadgeComponentProps, Variant } from './badge.component.props';
import { BadgeText, DangerBadge, SuccessBadge } from './badge.component.styles';

export const Badge: React.FC<BadgeComponentProps> = (props) => {
  const { variant, label, icon, ...rest } = props;

  const textColor = variant === 'danger' ? 'errorLight' : 'successLight';

  const getVariant = (variant: Variant = Variant.success) => {
    let badgeComponent;

    switch (variant) {
      case Variant.success:
        badgeComponent = SuccessBadge;
        break;

      case Variant.danger:
        badgeComponent = DangerBadge;
        break;

      default:
        badgeComponent = SuccessBadge;
    }

    return badgeComponent;
  };

  const StyledBadgeComponent = getVariant(Variant[variant]);

  return (
    <StyledBadgeComponent row vCenter hCenter gap={0.8} {...rest}>
      {icon && <IconSvg size='small' {...icon} />}
      <BadgeText color={textColor} {...label} />
    </StyledBadgeComponent>
  );
};
