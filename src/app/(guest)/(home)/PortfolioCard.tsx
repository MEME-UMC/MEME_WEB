import { JButton } from '@/components/JButton';
import { JIcon } from '@/components/JIcon';
import { JImage } from '@/components/JImage';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';

export const PortfolioCard = () => {
  return (
    <JButton
      sx={{
        flexDirection: 'column',
        width: 160,
        borderRadius: 3,
        boxShadow: '2px 4px 10px rgba(0, 0, 0, .2)',
        alignItems: 'start',
      }}
    >
      <JImage image={'sample-makeup'} />
      <Stack py={1} px={2}>
        <Stack>
          <Typography fontSize={10} color={COLORS.text_grey}>
            서울시 종로구
          </Typography>
          <Typography fontSize={16} fontWeight={600}>
            김제니
          </Typography>
        </Stack>
        <Row justifyContent={'start'} gap={0.3}>
          <JIcon icon="heart" />
          <Typography fontSize={14} color={COLORS.p_black}>
            127
          </Typography>
        </Row>
        <Typography fontSize={10} color={COLORS.gray500}>
          kim_jennie@naver.com
        </Typography>
      </Stack>
    </JButton>
  );
};
