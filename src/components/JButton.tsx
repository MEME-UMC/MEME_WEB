import { ButtonBase, ButtonBaseProps } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & ButtonBaseProps;

export const JButton = ({ children, sx, ...props }: Props) => {
  return (
    <ButtonBase
      component="div"
      sx={[
        {
          height: '100%',
          width: '100%',
          '&& .MuiTouchRipple-child': {
            backgroundColor: 'white',
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
