'use client';
import { AppBar } from '@/components/AppBar';
import Counter from '@/components/Counter';
import { JButton } from '@/components/JButton';
import { JIcon } from '@/components/JIcon';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Drawer } from './components/Drawer';
import { DrawerItem } from './components/DrawerItem';
import { ReservationListItem } from './components/ReservationListItem';
import { ReservationsortItem } from './components/ReservationsortItem2';

const Page = () => {
  const makeupSort = [
    { defaultValue: '전체', key: 'all' },
    { defaultValue: '특수 메이크업', key: 'special' },
    { defaultValue: '배우 메이크업', key: 'actor' },
    { defaultValue: '면접 메이크업', key: 'interview' },
    { defaultValue: '데일리 메이크업', key: 'daily' },
    { defaultValue: '기타 메이크업', key: 'etc' },
    { defaultValue: '파티/이벤트 메이크업', key: 'party' },
    { defaultValue: '스튜디오 메이크업', key: 'studio' },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <MotionWrapper>
        <AppBar title={'예약하기'} backIcon />
        <Stack px={3}>
          <Row gap={1} sx={{ overflowX: 'scroll' }} justifyContent={'start'}>
            {makeupSort.map((item) => (
              <ReservationsortItem
                key={item.key}
                defaultValue={item.defaultValue}
              />
            ))}
          </Row>
        </Stack>
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
                onClick={() => setIsDrawerOpen(true)}
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
          <ReservationListItem onClick={() => alert('아이템!')} />
        </Stack>
      </MotionWrapper>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <DrawerItem text="리뷰순" />
        <DrawerItem text="가격 낮은 순" />
        <DrawerItem text="가격 높은 순" />
      </Drawer>
    </>
  );
};
export default Page;
