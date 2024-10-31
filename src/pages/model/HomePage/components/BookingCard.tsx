import { Typography } from '@mui/material';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { JButton } from '../../../../components/JButton';
import { Row } from '../../../../components/Row';
import { Span } from '../../../../components/Span';
import { COLORS } from '../../../../core/colors';
import location from '../../../../assets/location.png';
import price from '../../../../assets/price.png';

type Booking = {
  name: string;
  at: Date;
  artist: string;
  location: string;
  price: number;
};

type Props = {
  booking: Booking;
};
export const BookingCard = ({ booking }: Props) => {
  return (
    <JButton
      sx={{
        p: 2,
        backgroundColor: COLORS.p_black,
        borderRadius: 3,
        flexDirection: 'column',
        alignItems: 'start',
        mt: 1,
        gap: 1,
      }}
      rippleColor={COLORS.white}
    >
      <Row width={'100%'} justifyContent={'space-between'}>
        <Typography color={COLORS.white} fontSize={16} fontWeight={600}>
          {booking.name}
        </Typography>
        <Typography color={COLORS.white} fontSize={16} fontWeight={600}>
          {format(booking.at, 'M/d (EEE)', { locale: ko })}
          <Span color={COLORS.primary} fontSize={16} fontWeight={600}>
            {format(booking.at, ' HH:mm ', { locale: ko })}
          </Span>
          예약
        </Typography>
      </Row>
      <Typography color={COLORS.white} fontSize={16} fontWeight={600}>
        {booking.artist}
      </Typography>
      <Row>
        <Row width={24}>
          <img src={location} />
        </Row>
        <Typography color={COLORS.white} fontSize={14} fontWeight={400}>
          {booking.location}
        </Typography>
      </Row>
      <Row>
        <Row width={24}>
          <img src={price} />
        </Row>
        <Typography color={COLORS.white} fontSize={14} fontWeight={400}>
          {booking.price.toLocaleString()}원
        </Typography>
      </Row>
    </JButton>
  );
};
