import { Stack, Typography } from '@mui/material';
import { Row } from '../../../../components/Row';
import { COLORS } from '../../../../core/colors';

const ReservationReviewItem = () => {
  return (
    <Stack>
      <Row justifyContent={'left'}>
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
          <Typography fontSize={14}>메메**</Typography>
        </Stack>
      </Row>
    </Stack>
  );
};

export default ReservationReviewItem;
