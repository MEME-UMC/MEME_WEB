import { Stack, Typography } from '@mui/material';

const ReservationBedge = () => {
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
        면접 메이크업
      </Typography>
    </Stack>
  );
};

export default ReservationBedge;
