import { Stack, Typography } from '@mui/material';

type ReservationBadgeProps = { text: string | undefined };
export const ReservationBadge = ({ text }: ReservationBadgeProps) => {
  return (
    <Stack flexDirection={'row'}>
      <Typography
        lineHeight={'19px'}
        px={1}
        fontSize={'10px'}
        textAlign={'center'}
        sx={{ background: '#FFC8B0' }}
        borderRadius={'5px'}
      >
        {text}
      </Typography>
    </Stack>
  );
};
