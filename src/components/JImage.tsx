import { memo, useState } from 'react';
import { Skeleton } from '@mui/material';

type Props = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  variant?: 'circular' | 'rounded' | 'rectangular' | 'text';
};

export const JImage = memo(
  ({ src, alt, width, height, variant = 'rectangular' }: Props) => {
    const [loaded, setLoaded] = useState(false);
    return (
      <>
        {!loaded && (
          <Skeleton
            variant={variant}
            width={width}
            height={height}
            animation="wave"
          />
        )}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => {
            setLoaded(true);
          }}
          style={{ display: loaded ? 'block' : 'none' }}
        />
      </>
    );
  }
);
