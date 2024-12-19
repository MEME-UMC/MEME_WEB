import { memo } from 'react';
import logoLg from '../assets/logo-lg.png';
import logoSm from '../assets/logo-sm.png';
import sampleMakeup from '../assets/sample-makeup.png';
import palette from '../assets/palette.png';
import hiMan from '../assets/hi-woman.png';
import hiWoman from '../assets/hi-man.png';
import partyCannon from '../assets/party-cannon.png';
import partyConfetti from '../assets/party-confetti.png';
import reservationBg01 from '../assets/reservationBg01.png';
import reservationBg02 from '../assets/reservationBg02.png';
import SearchPage1 from '../assets/ic_searchPage1.png';
import SearchPage2 from '../assets/ic_searchPage2.png';
import SearchPage3 from '../assets/ic_searchPage3.png';
import SearchPage4 from '../assets/ic_searchPage4.png';
import SearchPage5 from '../assets/ic_searchPage5.png';
import SearchPage6 from '../assets/ic_searchPage6.png';
import SearchPage7 from '../assets/ic_searchPage7.png';
import SearchPage8 from '../assets/ic_searchPage8.png';
import favoriteArtist from '../assets/favoriteArtist.png';
import favoriteMakeup from '../assets/favoriteMakeup.png';
import Image from 'next/image';

const ImageMap = {
  'logo-lg': {
    src: logoLg,
    width: 162,
    height: 101,
    alt: 'logo-lg',
  },
  'logo-sm': {
    src: logoSm,
    width: 68,
    height: 43,
    alt: 'logo-sm',
  },
  'sample-makeup': {
    src: sampleMakeup,
    width: 160,
    height: 160,
    alt: 'sample-makeup',
  },
  palette: {
    src: palette,
    alt: 'palette',
    width: 50,
    height: 51,
  },
  'hi-man': {
    src: hiMan,
    alt: 'hi-man',
    width: 50,
    height: 51,
  },
  'hi-woman': {
    src: hiWoman,
    alt: 'hi-woman',
    width: 50,
    height: 51,
  },
  'party-confetti': {
    src: partyConfetti,
    alt: 'party-confetti',
    width: 255,
    height: 205,
  },
  'party-cannon': {
    src: partyCannon,
    alt: 'party-cannon',
    width: 283,
    height: 289,
  },
  'reservation-bg-01': {
    src: reservationBg01,
    alt: 'reservation-bg-01',
    width: 320,
    height: 83,
  },
  'reservation-bg-02': {
    src: reservationBg02,
    alt: 'reservation-bg-02',
    width: 297,
    height: 136,
  },
  'search-page-01': {
    src: SearchPage1,
    alt: 'search-page-01',
    width: 63,
    height: 63,
  },
  'search-page-02': {
    src: SearchPage2,
    alt: 'search-page-03',
    width: 51,
    height: 51,
  },
  'search-page-03': {
    src: SearchPage3,
    alt: 'search-page-03',
    width: 51,
    height: 51,
  },
  'search-page-04': {
    src: SearchPage4,
    alt: 'search-page-04',
    width: 51.44,
    height: 51.44,
  },
  'search-page-05': {
    src: SearchPage5,
    alt: 'search-page-05',
    width: 44.23,
    height: 40.06,
  },
  'search-page-06': {
    src: SearchPage6,
    alt: 'search-page-06',
    width: 46.33,
    height: 46.33,
  },
  'search-page-07': {
    src: SearchPage7,
    alt: 'search-page-01',
    width: 51,
    height: 51,
  },
  'search-page-08': {
    src: SearchPage8,
    alt: 'search-page-01',
    width: 52.37,
    height: 52.37,
  },
  favoriteArtist: {
    src: favoriteArtist,
    alt: 'favoriteArtist',
    width: 187,
    height: 188,
  },
  favoriteMakeup: {
    src: favoriteMakeup,
    alt: 'favoriteMakeup',
    width: 187,
    height: 188,
  },
};

export type Image = keyof typeof ImageMap;

type Props = {
  image: Image;
  alt?: string;
  width?: number;
  height?: number;
};

const JImageComp = ({ image, alt, width, height }: Props) => {
  const obj = ImageMap[image];

  return (
    <Image
      src={obj.src}
      alt={alt ?? obj.alt}
      width={width ?? obj.width}
      height={height ?? obj.height}
    />
  );
};

export const JImage = memo(JImageComp);
