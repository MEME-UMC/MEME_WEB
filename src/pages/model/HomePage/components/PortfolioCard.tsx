/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable no-empty-pattern */
import { Stack, Typography } from '@mui/material';
import { JButton } from '../../../../components/JButton';
import { Row } from '../../../../components/Row';
import { COLORS } from '../../../../core/colors';
import sampleMakeup from '../../../../assets/sample-makeup.png';
import heart from '../../../../assets/heart.png';

type Props = {};

export const PortfolioCard = ({}: Props) => {
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
      <img src={sampleMakeup} width={160} height={160} />
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
          <img src={heart} />
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
