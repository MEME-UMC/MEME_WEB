import { Suspense, lazy, memo } from 'react';
import { Skeleton } from '@mui/material';

type IconMapItem = {
  src: () => Promise<typeof import('*.svg')>;
  width: number;
  height: number;
  variant?: 'circular' | 'rounded' | 'text' | 'rectangular';
};

const IconMap: Record<string, IconMapItem> = {
  reservation: {
    src: () => import('../assets/booking.svg'),
    width: 16,
    height: 20,
  },
  'heart-outline': {
    src: () => import('../assets/heart-outline.svg'),
    width: 24,
    height: 20,
  },
  home: {
    src: () => import('../assets/home.svg'),
    width: 19,
    height: 20,
  },
  message: {
    src: () => import('../assets/message.svg'),
    width: 23,
    height: 23,
  },
  profile: {
    src: () => import('../assets/profile.svg'),
    width: 94,
    height: 95,
    variant: 'circular',
  },
  'user-plus': {
    src: () => import('../assets/user-plus.svg'),
    width: 24,
    height: 25,
  },
  user: {
    src: () => import('../assets/user.svg'),
    width: 17,
    height: 20,
  },
  'email-login': {
    src: () => import('../assets/email-login.svg'),
    width: 300,
    height: 46,
  },
  'kakao-login': {
    src: () => import('../assets/kakao-login.svg'),
    width: 300,
    height: 46,
  },
  'apple-login': {
    src: () => import('../assets/apple-login.svg'),
    width: 300,
    height: 46,
  },
  filter: {
    src: () => import('../assets/filter.svg'),
    width: 15,
    height: 22,
  },
  notice: {
    src: () => import('../assets/notice.svg'),
    width: 18,
    height: 23,
  },
  search: {
    src: () => import('../assets/search.svg'),
    width: 17,
    height: 17,
  },
  heart: {
    src: () => import('../assets/heart.svg'),
    width: 12,
    height: 9,
  },
  location: {
    src: () => import('../assets/location.svg'),
    width: 15,
    height: 21,
  },
  price: {
    src: () => import('../assets/price.svg'),
    width: 16,
    height: 13,
  },
  leftArrow: {
    src: () => import('../assets/left-arrow.svg'),
    width: 10,
    height: 18,
  },
  rightArrow: {
    src: () => import('../assets/right-arrow.svg'),
    width: 8,
    height: 14,
  },
  noticeCircle: {
    src: () => import('../assets/notice-circle.svg'),
    width: 30,
    height: 30,
  },
};

export type Icon = keyof typeof IconMap;

type Props = {
  icon: Icon;
  color?: string;
  height?: number;
  width?: number;
};

export const JIcon = memo(({ icon, color, height, width }: Props) => {
  const obj = IconMap[icon];
  const IconComp = lazy(obj.src);
  const iconWidth = width ?? obj.width;
  const iconHeight = height ?? obj.height;
  const variant = obj.variant ?? 'rounded';

  return (
    <Suspense
      fallback={
        <Skeleton variant={variant} width={iconWidth} height={iconHeight} />
      }
    >
      {/* <Skeleton variant={variant} width={iconWidth} height={iconHeight} /> */}
      <IconComp width={iconWidth} height={iconHeight} color={color} />
    </Suspense>
  );
});
