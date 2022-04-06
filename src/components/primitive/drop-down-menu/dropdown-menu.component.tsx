import { useState } from 'react';
import { Avatar, Box } from 'components/primitive';
import { IconContainer, DropDownContainer } from './dropdown-menu.component.styles';

export const DropDownMenu = (props: any) => {
  const [isActive, setIsActive] = useState(false);

  const { icon, children } = props;

  return (
    <Box>
      <Box>
        <IconContainer onClick={() => setIsActive(!isActive)}>
          <Avatar size='small' {...icon} />
        </IconContainer>
      </Box>

      {isActive && <DropDownContainer style={{ transition: 'all 0.5s ease-in-out' }}>{children}</DropDownContainer>}
    </Box>
  );
};
