import { Typography } from '@mui/material';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { JButton } from '../../../../components/JButton';
import { Row } from '../../../../components/Row';
import { Span } from '../../../../components/Span';
import { COLORS } from '../../../../core/colors';
import { JIcon } from '../../../../components/JIcon';

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

const lg = {
  color: COLORS.white,
  fontSize: 16,
  fontWeight: 600,
};

const md = {
  color: COLORS.white,
  fontSize: 14,
  fontWeight: 400,
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
        <Typography {...lg}>{booking.name}</Typography>
        <Typography {...lg}>
          {format(booking.at, 'M/d (EEE)', { locale: ko })}
          <Span {...lg}>{format(booking.at, ' HH:mm ', { locale: ko })}</Span>
          예약
        </Typography>
      </Row>
      <Typography {...lg}>{booking.artist}</Typography>
      <Row>
        <Row width={24}>
          <JIcon icon="location" />
        </Row>
        <Typography {...md}>{booking.location}</Typography>
      </Row>
      <Row>
        <Row width={24}>
          <JIcon icon="price" />
        </Row>
        <Typography {...md}>{booking.price.toLocaleString()}원</Typography>
      </Row>
    </JButton>
  );
};
