import { Stack, Typography } from '@mui/material';

import { StarIcons } from './StarRating';
import { COLORS } from '@/styles/colors';
import { Row } from '@/components/Row';

export const ReservationReviewItem = () => {
  return (
    <Stack
      py={'19px'}
      gap={2}
      sx={{ borderTop: `1px solid ${COLORS.gray300}` }}
    >
      <Row justifyContent={'left'} gap={1} alignItems={'flex-start'}>
        <Stack
          sx={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: `${COLORS.primary}`,
            overflow: 'hidden',
          }}
        />
        <Stack>
          <Typography fontSize={14} fontWeight={600}>
            메메**
          </Typography>
          <StarIcons filledStars={4} />
        </Stack>
      </Row>
      <Row justifyContent={'flex-start'} gap={2}>
        <Stack width={'50%'} overflow="hidden">
          <Stack sx={{ position: 'relative', paddingBottom: '100%' }}>
            <Stack
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage:
                  'url(https://s3-alpha-sig.figma.com/img/aaaf/c17b/1b9d74c439841e250d92784e6e6c3049?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hCGAC9MQz2xnDt9Fu4oULBDX4ZKAX9-RTOWu7~c~fOhm-WXa52u-OwPsG9i2m3yoL2~oYW7hcnjKggHu~z1nkeaxfkSqEphatNfRLTE2YGIVes~ESLu1LMsrzokkzCVUAPftW3CuSIRe5RQ1q7VvaOffQeIAc08rZhIf3aGdC~TZvEk5L1T7BrEXNG4MeX8vkNzSnmJMI5mj~vWKiRECG8SMu353Af30rulG5pH5QvXOnkAouE8O6Lp4BM2G-0ZlsJ1sLg9UgwvPJ~RzyD7PYvd8bFTo-PK3uOsAdGwjljNl9oUiJzTFhyRQQzNiYCUsR1-2QoY3YSdopnwPc6qSPQ__)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
              }}
            />
          </Stack>
        </Stack>
        <Stack width={'50%'} overflow="hidden">
          <Stack sx={{ position: 'relative', paddingBottom: '100%' }}>
            <Stack
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage:
                  'url(https://s3-alpha-sig.figma.com/img/8712/d1cd/8f6f1c88873d8262e36343e574139b0d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RF4tJHCLUo-Kn8Dwbt77X2ZeFLQUI1G9dRUVDrW4o8CF0OWr1-RdLlGATyuypCqvMWUwFQH2OLf3C-xZoIok4TkV2xeogw1bFhA3onTgZXen541PT3XgO4RTkNwQzIjz2OLOg8d~rPDXEHIXPmA42T8mITxu4ZZLY9hr7OPkGZCfJVP1kmeqOf9EueGwdSJy7H-M9yG7JMfckmIIT9yD-zCRwOE0LIX0ALnswccf~Gp-2nxVhudozxNgEFvCOdQiEAe-SxK8qF0PE~yjgatE5DApbkjDQh1p82run1AsGDQhp3wpuT9hxXB89X~Emgk5oYLkzuX2x9sdIE1-tJUWAA__)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
              }}
            />
          </Stack>
        </Stack>
      </Row>
      <Stack>
        <Typography fontSize={14}>후기 작성 칸 후기 작성 칸</Typography>
      </Stack>
    </Stack>
  );
};
