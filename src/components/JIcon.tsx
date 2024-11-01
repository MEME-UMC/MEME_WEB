import { Stack } from '@mui/material';
import Booking from '../assets/booking.svg';
import HeartOutline from '../assets/heart-outline.svg';
import Home from '../assets/home.svg';
import Message from '../assets/message.svg';
import Profile from '../assets/profile.svg';
import UserPlus from '../assets/user-plus.svg';
import User from '../assets/user.svg';

type Icon =
  | 'booking'
  | 'heart-outline'
  | 'home'
  | 'message'
  | 'profile'
  | 'user-plus'
  | 'user';

const IconMap = {
  booking: Booking,
  'heart-outline': HeartOutline,
  home: Home,
  message: Message,
  profile: Profile,
  'user-plus': UserPlus,
  user: User,
};

type Props = {
  icon: Icon;
  height?: number;
  color?: string;
};

export const JIcon = ({ icon, height, color }: Props) => {
  const IconComp = IconMap[icon];
  return (
    <Stack height={height} justifyContent={'center'}>
      <IconComp color={color} />
    </Stack>
  );
};
