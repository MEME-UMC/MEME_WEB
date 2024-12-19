import { JImage } from '@/components/JImage';
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

export const Nodata = () => {
  return (
    <Stack>
      <Stack mt={'20%'}>
        <Stack gap={1}>
          <Typography fontSize={20} fontWeight={600} textAlign={'center'}>
            관심 메이크업을 설정해보세요.
          </Typography>
          <Typography fontSize={18} fontWeight={400} textAlign={'center'}>
            다양하고 재밌는 포트폴리오를 볼 수 있어요.
          </Typography>
          <Stack justifyContent={'center'} alignItems={'center'} mt={6}>
            <JImage image="favoriteMakeup" />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        position={'absolute'}
        width={'100%'}
        left={0}
        bottom={0}
        px={3}
        py={2}
        boxSizing={'border-box'}
      >
        <Button variant="contained" sx={{ fontSize: '14px', fontWeight: 400 }}>
          메이크업 보러가기
        </Button>
      </Stack>
    </Stack>
  );
};
