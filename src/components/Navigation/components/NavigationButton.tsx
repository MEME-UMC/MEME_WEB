import { BottomNavigationAction, Typography } from '@mui/material';
import { COLORS } from '../../../core/colors';
import { Path } from '../../../core/routes';
import { Icon, JIcon } from '../../JIcon';

type Props = {
  value: Path;
  label: string;
  icon: Icon;
};

export const NavigationButton = ({ value, label, icon, ...props }: Props) => {
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
      icon={<JIcon height={22} icon={icon} />}
      {...props}
    />
  );
};
