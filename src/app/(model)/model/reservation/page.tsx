'use client';
import { AppBar } from '@/components/AppBar';
import { JIcon } from '@/components/JIcon';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Box, Stack, Typography } from '@mui/material';
import { ReservationItem } from './components/ReservationItem';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  return (
    <MotionWrapper>
      <AppBar title="전체 예약보기" backIcon />
      <Stack px={3} mt={1.5}>
        <Row justifyContent={'flex-end'} gap={2}>
          <Row gap={0.5}>
            <Box
              sx={{
                display: 'flex',
                width: 16,
                height: 16,
                justifyContent: 'center',
                alignItems: 'center',
                background: COLORS.primary,
                borderRadius: '50%',
              }}
            >
              <JIcon icon="check" />
            </Box>
            <Typography fontSize={14} fontWeight={500} color={COLORS.gray600}>
              예정
            </Typography>
          </Row>
          <Row gap={0.5}>
            <Box
              sx={{
                display: 'flex',
                width: 14,
                height: 14,
                justifyContent: 'center',
                alignItems: 'center',
                background: COLORS.gray400,
                border: `1px solid ${COLORS.gray700}`,
                borderRadius: '50%',
              }}
            >
              <JIcon icon="check" />
            </Box>
            <Typography fontSize={14} fontWeight={500} color={COLORS.gray600}>
              완료
            </Typography>
          </Row>
        </Row>
        <Stack>
          <Row justifyContent={'flex-start'} gap={1} mb={1.5}>
            <Typography fontSize={20} fontWeight={600}>
              확정된 예약
            </Typography>
            <Box
              sx={{
                width: '5px',
                height: '5px',
                background: COLORS.p_black,
                borderRadius: '50%',
              }}
            />
            <Typography fontSize={16}>총 2건</Typography>
          </Row>
        </Stack>
        <Stack gap={2}>
          <ReservationItem
            makeup={'메이크업명'}
            date={'2024. 02. 22 목'}
            time={'13:00'}
            location={'장소'}
            artistName={'아티스트 명'}
            price={'10,000'}
            onClick={() => router.push(`reservation/${0}`)}
          />
        </Stack>

        {/* <Stack mt={6}>
          <Row justifyContent={'flex-start'} gap={1}>
            <Typography fontSize={20} fontWeight={600}>
              예약 대기중
            </Typography>
            <Box
              sx={{
                width: '5px',
                height: '5px',
                background: COLORS.p_black,
                borderRadius: '50%',
              }}
            />
            <Typography fontSize={16}>총 2건</Typography>
          </Row>
          <ReservationItem
            makeup={'메이크업명'}
            date={'2024. 02. 22 목'}
            time={'13:00'}
            location={'장소'}
            artistName={'아티스트 명'}
            price={'10,000'}
            type={'wait}
          />
        </Stack> */}
      </Stack>
    </MotionWrapper>
  );
};
export default Page;
