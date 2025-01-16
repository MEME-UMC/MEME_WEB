import { JIcon } from '@/components/JIcon';
import { Row } from '@/components/Row';
import { SquareImage } from '@/components/SquareImage';
import { COLORS } from '@/styles/colors';
import { Stack } from '@mui/material';

type ImageThumbProps = {
  images: File[];
  onDelete: (index: number) => void;
};
export const ImageThumb = ({ images, onDelete }: ImageThumbProps) => {
  return (
    <Row justifyContent={'flex-start'} gap={1}>
      {images.map((item, index) => (
        <Stack
          position={'relative'}
          key={index}
          width={80}
          onClick={() => onDelete(index)}
          sx={{ cursor: 'pointer' }}
          borderRadius={'5px'}
          overflow={'hidden'}
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
            bgcolor={COLORS.gray400}
          >
            <JIcon icon='close-white' />
          </Stack>
        </Stack>
      ))}
    </Row>
  );
};
