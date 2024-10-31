import { ReactNode } from 'react';
import { BottomNavigationAction, Typography } from '@mui/material';
import { COLORS } from '../../../core/colors';

type Props = {
  value: string;
  label: string;
  children: ReactNode | ReactNode[];
};

export const NavigationButton = ({
  value,
  label,
  children,
  ...props
}: Props) => {
  return (
    <BottomNavigationAction
      value={value}
      label={
        <Typography fontWeight={600} fontSize={10}>
          {label}
        </Typography>
      }
      sx={{
        padding: 0,
        color: COLORS.gray300,
        '&& .MuiTouchRipple-child': {
          backgroundColor: COLORS.primary,
        },
        maxWidth: 'none',
      }}
      icon={children}
      {...props}
    />
  );
};
