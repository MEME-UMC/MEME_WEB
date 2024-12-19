import Counter from '@/components/Counter';
import { JButton } from '@/components/JButton';
import { JIcon } from '@/components/JIcon';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import { ReservationListItem } from './ReservationListItem';

type ReservationListPorps = {
  drawerOpen: () => void;
  badgeText?: string | undefined;
  onClick: () => void;
};
export const ReserVationList = ({
  drawerOpen,
  badgeText,
  onClick,
}: ReservationListPorps) => {
  return (
    <Stack>
      <Stack px={3} py={'11px'}>
        <Row
          borderTop={'1px solid #DFDFDF'}
          paddingTop={'11px'}
          sx={{ justifyContent: 'space-between' }}
        >
          <Stack>
            <Row>
              <Counter fontSize={12} targetNumber={100} />
              <Typography fontSize={12} fontWeight={400}>
                개의 검색 결과
              </Typography>
            </Row>
          </Stack>
          <Stack>
            <JButton
              sx={{
                width: '81px',
                height: '27px',
                border: `1px solid ${COLORS.primary}`,
                borderRadius: '20px',
              }}
              onClick={drawerOpen}
            >
              <Typography fontSize={10} sx={{ marginRight: '10px' }}>
                리뷰순
              </Typography>
              <JIcon icon="filter" />
            </JButton>
          </Stack>
        </Row>
      </Stack>
      <Stack px={'19px'}>
        <ReservationListItem badgeText={badgeText} onClick={onClick} />
      </Stack>
    </Stack>
  );
};
