import { Stack, Typography } from '@mui/material';
import { Row } from '../../../components/Row';
import { COLORS } from '../../../core/colors';
import { JImage } from '../../../components/JImage';

export const ReservationComplete = () => {
  return (
    <Stack paddingTop={'30%'}>
      <Stack px={'28px'}>
        <Typography fontSize={22} fontWeight={700}>
          김리타님,
        </Typography>
        {/* <Stack>
          <Typography fontSize={22} fontWeight={700}>
            예약 가능 여부를
            <span style={{ color: COLORS.primary }}>확인 중</span> 입니다.
          </Typography>
          <Typography fontSize={11} fontWeight={600}>
            아티스트가 예약을 확인 하는대로 알림을 통해 알려드리겠습니다.
          </Typography>
        </Stack> */}
        <Stack>
          <Typography fontSize={22} fontWeight={700}>
            예약이
            <span style={{ color: COLORS.primary }}>확정</span> 되었습니다!
          </Typography>
        </Stack>
      </Stack>

      <Stack py={5}>
        <JImage image="reservation-bg-01" />
      </Stack>

      <Stack padding={'0 23px'}>
        <Stack
          gap={1}
          sx={{
            padding: '18px 23px',
            background: `${COLORS.gray100}`,
            borderRadius: '10px',
          }}
        >
          <Typography fontSize={18} fontWeight={600}>
            면접 프리패스상 메이크업
          </Typography>
          <Row justifyContent={'space-between'}>
            <Typography>날짜</Typography>
            <Typography color={`${COLORS.primary}`} fontWeight={500}>
              0월 0일 0요일 00:00시
            </Typography>
          </Row>
          <Row justifyContent={'space-between'}>
            <Typography>아티스트명</Typography>
            <Typography>차차</Typography>
          </Row>
          <Row justifyContent={'space-between'}>
            <Typography>장소</Typography>
            <Typography>서울 강남구</Typography>
          </Row>
        </Stack>
      </Stack>
      <Stack alignItems={'flex-end'} paddingRight={6}>
        <JImage image="reservation-bg-02" />
      </Stack>
    </Stack>
  );
};
