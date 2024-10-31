import { ButtonBase, ButtonBaseProps } from '@mui/material';
import { ReactNode } from 'react';
import { COLORS } from '../core/colors';

type Props = {
  children: ReactNode;
  rippleColor?: string;
  onClick?: () => void;
} & ButtonBaseProps;

export const JButton = ({ children, rippleColor, sx, ...props }: Props) => {
  return (
    <ButtonBase
      component="div"
      onClick={props.onClick}
      sx={[
        {
          height: '100%',
          width: '100%',
          '&& .MuiTouchRipple-child': {
            backgroundColor: rippleColor ?? COLORS.primary,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};
