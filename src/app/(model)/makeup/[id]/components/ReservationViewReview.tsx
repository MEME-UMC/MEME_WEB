import { Stack } from '@mui/material';
import { ReservationReviewItem } from './ReservationReviewItem';
import { StarRating } from './StarRating';

export const ReservationViewReview = () => {
  return (
    <Stack>
      <Stack
        my={'20px'}
        px={'37px'}
        py={3}
        sx={{ border: `2px solid #F4F4F4`, borderRadius: '15px' }}
      >
        <StarRating />
      </Stack>

      <ReservationReviewItem />
      <ReservationReviewItem />
      <ReservationReviewItem />
      <ReservationReviewItem />
    </Stack>
  );
};
