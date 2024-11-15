import { Stack, Typography } from '@mui/material';
import { JButton } from '../../../../components/JButton';
import { Row } from '../../../../components/Row';
import { COLORS } from '../../../../core/colors';

export const Step3Part1 = () => {
  return (
    <Stack alignItems={'start'} px={2}>
      <Typography fontWeight={600} py={4}>
        아티스트인가요, 모델인가요?
      </Typography>
      <Stack width={1} alignItems={'center'} gap={4}>
        <JButton
          sx={{
            height: '120px',
            borderRadius: '100px',
            width: '327px',
            boxShadow: `-5px -5px 20px 0px ${COLORS.gray300} inset`,
          }}
        >
          <Row>
            <Stack>
              <Typography>메이크업 아티스트</Typography>
              <Typography>사업자 등록 번호가 필요해요.</Typography>
            </Stack>
          </Row>
        </JButton>
        <JButton
          sx={{
            height: '120px',
            borderRadius: '100px',
            width: '327px',
            boxShadow: `-5px -5px 20px 0px ${COLORS.gray300} inset`,
          }}
        >
          <Row>
            <Stack>
              <Typography fontWeight={600} fontSize={18}>
                모델
              </Typography>
            </Stack>
          </Row>
        </JButton>
      </Stack>
    </Stack>
  );
};
