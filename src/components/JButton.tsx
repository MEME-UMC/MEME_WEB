import { COLORS } from '@/styles/colors';
import { ButtonBase, ButtonBaseProps } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  rippleColor?: string;
} & ButtonBaseProps;

export const JButton = ({ children, rippleColor, sx, ...props }: Props) => {
  return (
    <ButtonBase
      component="div"
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
