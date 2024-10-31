import { ButtonBase, ButtonBaseProps } from '@mui/material';
import { ReactNode } from 'react';
import { COLORS } from '../core/colors';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: ReactNode;
  rippleColor?: string;
  to?: string | number;
} & ButtonBaseProps;

export const JButton = ({ children, rippleColor, sx, to, ...props }: Props) => {
  const navigate = useNavigate();
  return (
    <ButtonBase
      component="div"
      onClick={() => {
        if (to !== undefined) {
          navigate(to as string);
        }
      }}
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
