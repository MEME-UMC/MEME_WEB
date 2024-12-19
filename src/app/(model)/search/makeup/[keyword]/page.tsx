'use client';
import { AppBar } from '@/components/AppBar';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Row } from '@/components/Row';
import { Stack } from '@mui/material';
import { useState } from 'react';
import { Drawer } from './components/Drawer';
import { DrawerItem } from './components/DrawerItem';

import { ReservationsortItem } from './components/ReservationsortItem2';
import { useParams, useRouter } from 'next/navigation';
import { ReserVationList } from './components/ReserVationList';

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const keyword = params.keyword;

  const makeupSort = [
    { defaultValue: '전체', key: 'all' },
    { defaultValue: '특수 메이크업', key: 'special' },
    { defaultValue: '배우 메이크업', key: 'actor' },
    { defaultValue: '면접 메이크업', key: 'interview' },
    { defaultValue: '데일리 메이크업', key: 'daily' },
    { defaultValue: '기타 메이크업', key: 'etc' },
    { defaultValue: '파티/이벤트 메이크업', key: 'party' },
    { defaultValue: '스튜디오 메이크업', key: 'studio' },
    { defaultValue: '웨딩 메이크업', key: 'wedding' },
  ];

  const matchedSort = makeupSort.find((item) => item.key === keyword);

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
        <ReserVationList
          drawerOpen={() => setIsDrawerOpen(true)}
          badgeText={matchedSort?.defaultValue}
          onClick={() => router.push('/makeup/0')}
        />
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
