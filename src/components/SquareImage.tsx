import { Stack } from '@mui/material';
import React from 'react';

type SquareImageProps = {
  url: string;
};
export const SquareImage = ({ url }: SquareImageProps) => {
  return (
    <Stack width={'100%'} overflow="hidden">
      <Stack sx={{ position: 'relative', paddingBottom: '100%' }}>
        <Stack
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
          }}
        ></Stack>
      </Stack>
    </Stack>
  );
};
