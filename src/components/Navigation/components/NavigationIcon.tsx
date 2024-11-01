import { SvgIcon } from '@mui/material';
import Home from '/src/assets/home.svg';
import Booking from '/src/assets/booking.svg';
import User from '/src/assets/user.svg';
type Props = {
  type: string;
};

export const NavigationIcon = ({ type }: Props) => {
  switch (type) {
    case 'home':
      return (
        <SvgIcon sx={{ width: 24, height: 24 }}>
          <Home />
        </SvgIcon>
      );
    case 'book':
      return (
        <SvgIcon sx={{ width: 22, height: 22 }}>
          <Booking />
        </SvgIcon>
      );
    case 'my':
      return (
        <SvgIcon sx={{ width: 24, height: 24, pl: 1 }}>
          <User />
        </SvgIcon>
      );

    default:
      return null;
  }
};
