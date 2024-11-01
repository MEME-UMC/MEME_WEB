import { Suspense, lazy } from 'react';
import { CircularProgress, Stack } from '@mui/material';

const IconMap = {
  booking: () => import('../assets/booking.svg'),
  'heart-outline': () => import('../assets/heart-outline.svg'),
  home: () => import('../assets/home.svg'),
  message: () => import('../assets/message.svg'),
  profile: () => import('../assets/profile.svg'),
  'user-plus': () => import('../assets/user-plus.svg'),
  user: () => import('../assets/user.svg'),
  'email-login': () => import('../assets/email-login.svg'),
  'kakao-login': () => import('../assets/kakao-login.svg'),
  'apple-login': () => import('../assets/apple-login.svg'),
};

type Props = {
  icon: keyof typeof IconMap;
  height?: number;
  color?: string;
};

export const JIcon = ({ icon, height, color }: Props) => {
  const IconComp = lazy(IconMap[icon]);

  return (
    <Stack height={height} justifyContent="center">
      <Suspense fallback={<CircularProgress />}>
        <IconComp color={color} />
      </Suspense>
    </Stack>
  );
};
