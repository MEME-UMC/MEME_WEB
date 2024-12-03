import { Stack, Typography } from '@mui/material';

type ReservationViewInfoProps = {
  content: string;
};
export const ReservationViewInfo = ({ content }: ReservationViewInfoProps) => {
  return (
    <Stack padding={'20px 0'}>
      <Typography fontSize={14}>{content}</Typography>
    </Stack>
  );
};
