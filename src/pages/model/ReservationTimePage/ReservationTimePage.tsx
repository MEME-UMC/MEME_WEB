import { Typography } from '@mui/material';
import { MotionWrapper } from '../../../components/MotionWrapper';
import { AppBar } from '../../../components/AppBar';

export const ReservationTimePage = () => {
  return (
    <MotionWrapper>
      <AppBar title={'예약하기'} backIcon />
      <Typography fontSize={18} fontWeight={600}>
        메이크업 받을 장소를 확인해주세요.
      </Typography>
    </MotionWrapper>
  );
};
