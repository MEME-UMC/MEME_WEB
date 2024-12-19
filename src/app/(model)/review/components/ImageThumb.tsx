import { JIcon } from '@/components/JIcon';
import { Row } from '@/components/Row';
import { SquareImage } from '@/components/SquareImage';
import { Stack } from '@mui/material';
import React from 'react';

type ImageThumbProps = {
  images: File[];
  onDelete: (index: number) => void;
};
export const ImageThumb = ({ images, onDelete }: ImageThumbProps) => {
  console.log(images);
  return (
    <Row justifyContent={'flex-start'} gap={1}>
      {images.map((item, index) => (
        <Stack
          position={'relative'}
          key={index}
          width={131}
          onClick={() => onDelete(index)}
          sx={{ cursor: 'pointer' }}
        >
          <SquareImage url={URL.createObjectURL(item)} />
          <Stack
            position={'absolute'}
            width={18}
            height={18}
            justifyContent={'center'}
            alignItems={'center'}
            top={0}
            right={0}
            bgcolor={' #00000033'}
          >
            <JIcon icon="close-white" />
          </Stack>
        </Stack>
      ))}
    </Row>
  );
};
