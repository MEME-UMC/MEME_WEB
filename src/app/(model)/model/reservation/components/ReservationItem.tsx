import Counter from '@/components/Counter';
import { JButton } from '@/components/JButton';
import { JIcon } from '@/components/JIcon';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';
import React from 'react';

type ReservationItemProps = {
  makeup: string;
  date: string;
  time: string;
  location: string;
  artistName: string;
  price: string;
  type?: 'wait' | 'today' | 'confirm';
  onClick: () => void;
};
export const ReservationItem = ({
  makeup,
  date,
  time,
  location,
  price,
  artistName,
  type,
  onClick,
}: ReservationItemProps) => {
  return (
    <Stack width={'100%'}>
      {type !== 'today' && (
        <Typography
          fontSize={16}
          fontWeight={600}
          mb={1.5}
          color={type && COLORS.gray500}
        >
          {date}
        </Typography>
      )}

      <Stack
        sx={{
          background:
            type === 'wait'
              ? COLORS.gray300
              : type === 'today'
              ? COLORS.p_black
              : type === 'confirm'
              ? COLORS.gray100
              : COLORS.white,
          borderRadius: '10px',
        }}
        borderRadius={10}
        overflow={'hidden'}
      >
        <JButton onClick={onClick}>
          <Stack width={'100%'} gap={1} p={2.5}>
            <Row justifyContent={'space-between'}>
              <Typography
                fontSize={18}
                fontWeight={600}
                color={type === 'today' ? COLORS.white : COLORS.p_black}
              >
                {makeup}
              </Typography>
              <Row gap={0.5}>
                <Typography
                  fontSize={18}
                  fontWeight={600}
                  color={COLORS.primary}
                >
                  {time}
                </Typography>
                <Typography
                  fontSize={18}
                  fontWeight={600}
                  color={type === 'today' ? COLORS.white : COLORS.p_black}
                >
                  {type === 'today' ? '예약' : '예약 대기 중'}
                </Typography>
              </Row>
            </Row>
            <Typography
              fontWeight={600}
              color={type === 'today' ? COLORS.white : COLORS.p_black}
            >
              {artistName}
            </Typography>
            <Row justifyContent={'flex-start'} gap={0.5}>
              <JIcon icon='location' />

              <Typography
                fontSize={14}
                fontWeight={400}
                color={type === 'today' ? COLORS.white : COLORS.p_black}
              >
                {location}
              </Typography>
            </Row>
            <Row justifyContent={'flex-start'} gap={0.5}>
              <JIcon icon='price' />
              <Counter
                targetNumber={`${price}원`}
                fontSize={14}
                color={type === 'today' ? COLORS.white : COLORS.p_black}
              />
            </Row>
          </Stack>
        </JButton>
      </Stack>
    </Stack>
  );
};
