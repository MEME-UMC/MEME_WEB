import { memo } from 'react';
import reservation from '../assets/booking.svg';
import heartOutline from '../assets/heart-outline.svg';
import home from '../assets/home.svg';
import message from '../assets/message.svg';
import profile from '../assets/profile.svg';
import userPlus from '../assets/user-plus.svg';
import user from '../assets/user.svg';
import emailLogin from '../assets/email-login.svg';
import kakaoLogin from '../assets/kakao-login.svg';
import appleLogin from '../assets/apple-login.svg';
import filter from '../assets/filter.svg';
import notice from '../assets/notice.svg';
import search from '../assets/search.svg';
import heart from '../assets/heart.svg';
import heartBlack from '../assets/heart-black.svg';
import location from '../assets/location.svg';
import price from '../assets/price.svg';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import noticeCircle from '../assets/notice-circle.svg';
import kakaoSm from '../assets/kakao-sm.svg';
import appleSm from '../assets/apple-sm.svg';
import circleChecked from '../assets/circle-checked.svg';
import circleUnchecked from '../assets/circle-unchecked.svg';
import starGradient from '../assets/start-gradient.svg';
import starGray from '../assets/start-gray.svg';
import plus from '../assets/plus.svg';
import checked from '../assets/checked.svg';

const IconMap = {
  reservation: {
    src: reservation,
    width: 16,
    height: 20,
  },
  'heart-outline': {
    src: heartOutline,
    width: 24,
    height: 20,
  },
  home: {
    src: home,
    width: 19,
    height: 20,
  },
  message: {
    src: message,
    width: 23,
    height: 23,
  },
  profile: {
    src: profile,
    width: 37,
    height: 43,
  },
  'user-plus': {
    src: userPlus,
    width: 24,
    height: 25,
  },
  user: {
    src: user,
    width: 17,
    height: 20,
  },
  'email-login': {
    src: emailLogin,
    width: 300,
    height: 46,
  },
  'kakao-login': {
    src: kakaoLogin,
    width: 300,
    height: 46,
  },
  'apple-login': {
    src: appleLogin,
    width: 300,
    height: 46,
  },
  filter: {
    src: filter,
    width: 15,
    height: 22,
  },
  notice: {
    src: notice,
    width: 18,
    height: 23,
  },
  search: {
    src: search,
    width: 17,
    height: 17,
  },
  heart: {
    src: heart,
    width: 12,
    height: 9,
  },
  heartBlack: {
    src: heartBlack,
    width: 24,
    height: 20,
  },

  location: {
    src: location,
    width: 15,
    height: 21,
  },
  price: {
    src: price,
    width: 16,
    height: 13,
  },
  leftArrow: {
    src: leftArrow,
    width: 10,
    height: 18,
  },
  rightArrow: {
    src: rightArrow,
    width: 8,
    height: 14,
  },
  noticeCircle: {
    src: noticeCircle,
    width: 30,
    height: 30,
  },
  kakaoSm: {
    src: kakaoSm,
    width: 47,
    height: 47,
  },
  appleSm: {
    src: appleSm,
    width: 47,
    height: 47,
  },
  'circle-checked': {
    src: circleChecked,
    width: 20,
    height: 20,
  },
  'circle-unchecked': {
    src: circleUnchecked,
    width: 20,
    height: 20,
  },
  starGradient: {
    src: starGradient,
    width: 13,
    height: 12,
  },
  starGray: {
    src: starGray,
    width: 13,
    height: 12,
  },
  plus: {
    src: plus,
    width: 17,
    height: 17,
  },
  checked: {
    src: checked,
    width: 16,
    height: 11,
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
  const IconComponent = obj.src;

  return (
    <IconComponent
      width={width ?? obj.width}
      height={height ?? obj.height}
      color={color}
    />
  );
});
