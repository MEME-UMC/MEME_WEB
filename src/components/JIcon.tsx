import { Suspense, lazy } from 'react';
import { CircularProgress, Stack } from '@mui/material';

const IconMap = {
  reservation: () => import('../assets/booking.svg'),
  'heart-outline': () => import('../assets/heart-outline.svg'),
  home: () => import('../assets/home.svg'),
  message: () => import('../assets/message.svg'),
  profile: () => import('../assets/profile.svg'),
  'user-plus': () => import('../assets/user-plus.svg'),
  user: () => import('../assets/user.svg'),
  'email-login': () => import('../assets/email-login.svg'),
  'kakao-login': () => import('../assets/kakao-login.svg'),
  'apple-login': () => import('../assets/apple-login.svg'),
  filter: () => import('../assets/filter.svg'),
  notice: () => import('../assets/notice.svg'),
  search: () => import('../assets/search.svg'),
  heart: () => import('../assets/heart.svg'),
  location: () => import('../assets/location.svg'),
  price: () => import('../assets/price.svg'),
  leftArrow: () => import('../assets/left-arrow.svg'),
  rightArrow: () => import('../assets/right-arrow.svg'),
  noticeCircle: () => import('../assets/notice-circle.svg'),
};

export type Icon = keyof typeof IconMap;

type Props = {
  icon: Icon;
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
