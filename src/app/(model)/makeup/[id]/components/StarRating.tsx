import { JIcon } from '@/components/JIcon';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';

export const StarIcons = ({ filledStars = 0 }) => {
  return (
    <Row>
      {Array.from({ length: 5 }).map((_, index) =>
        index < filledStars ? (
          <JIcon key={index} icon="starGradient" />
        ) : (
          <JIcon key={index} icon="starGray" />
        )
      )}
    </Row>
  );
};

export const StarRating = () => {
  const ratingData = [
    { stars: 5, count: 12 },
    { stars: 4, count: 10 },
    { stars: 3, count: 7 },
    { stars: 2, count: 1 },
    { stars: 1, count: 1 },
  ];

  const maxCount = Math.max(...ratingData.map((rating) => rating.count));

  return (
    <Stack>
      {ratingData.map((rating) => (
        <Row
          display={'flex'}
          gap={2}
          justifyContent={'left'}
          key={rating.stars}
          alignItems={'center'}
        >
          <StarIcons filledStars={rating.stars} />
          <Stack
            position={'relative'}
            width={'100%'}
            height={'3px'}
            sx={{
              backgroundColor: `${COLORS.gray300}`,
              borderRadius: '5px',
            }}
          >
            <Stack
              position={'absolute'}
              top={0}
              left={0}
              width={`${(rating.count / maxCount) * 100}%`}
              height={'3px'}
              sx={{ background: `${COLORS.primary}` }}
            />
          </Stack>
          <Stack>
            <Typography
              minWidth={'18px'}
              fontSize={14}
              fontWeight={600}
              textAlign={'right'}
              color={`${COLORS.gray500}`}
            >
              {rating.count}
            </Typography>
          </Stack>
        </Row>
      ))}
    </Stack>
  );
};
