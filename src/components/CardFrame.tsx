import { Stack, Typography } from '@mui/material';

import Link from 'next/link';
import { SquareImage } from './SquareImage';
import { Row } from './Row';
import { JIcon } from './JIcon';
import { COLORS } from '@/styles/colors';

type CardFrameProps = {
  url: string;
  imageUrl: string;
  title: string;
  subTitle: string;
  rating: string;
  information: string;
  type: 'artist' | 'makeup';
};
export const CardFrame = ({
  url,
  imageUrl,
  title,
  subTitle,
  rating,
  information,
  type,
}: CardFrameProps) => {
  return (
    <Link
      href={url}
      style={{ color: '#222', textDecoration: 'none', outline: 'none' }}
    >
      <Stack
        sx={{
          flexDirection: 'column',
          width: 160,
          borderRadius: 3,
          boxShadow: '2px 4px 10px rgba(0, 0, 0, .2)',
          alignItems: 'start',
        }}
      >
        <SquareImage url={imageUrl} />

        <Stack py={1} px={2}>
          <Stack>
            <Typography fontSize={10} color={COLORS.text_grey}>
              {subTitle}
            </Typography>
            <Typography fontSize={16} fontWeight={600}>
              {title}
            </Typography>
          </Stack>
          <Row justifyContent={'start'} gap={0.3}>
            <JIcon icon={type === 'artist' ? 'heart' : 'star'} />
            <Typography fontSize={14} color={COLORS.p_black}>
              {rating}
            </Typography>
          </Row>
          <Typography fontSize={8} color={COLORS.gray500}>
            {information}
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
};
