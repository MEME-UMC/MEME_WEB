import { memo } from 'react';
import logoLg from '../assets/logo-lg.png';
import logoSm from '../assets/logo-sm.png';
import sampleMakeup from '../assets/sample-makeup.png';

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
};

export type Image = keyof typeof ImageMap;

type Props = {
  image: Image;
  alt?: string;
  width?: number;
  height?: number;
};

export const JImage = memo(({ image, alt, width, height }: Props) => {
  const obj = ImageMap[image];
  return (
    <img
      src={obj.src}
      alt={alt ?? obj.alt}
      width={width ?? obj.width}
      height={height ?? obj.height}
    />
  );
});
