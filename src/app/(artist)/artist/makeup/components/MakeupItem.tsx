import { JButton } from '@/components/JButton';
import { JIcon } from '@/components/JIcon';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';

export const MakeupItem = () => {
  return (
    <Stack
      boxShadow={'0px 4px 10px 0px #0000001A;'}
      borderRadius={'10px'}
      overflow={'hidden'}
    >
      <JButton
        sx={{
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <Stack width={'100%'} position={'relative'} height={'142px'}>
          <Stack
            position={'absolute'}
            top={0}
            right={0}
            bottom={0}
            left={0}
          ></Stack>
        </Stack>
        <Stack
          width={'100%'}
          gap={0.3}
          px={2}
          py={'10px'}
          boxSizing={'border-box'}
        >
          <Typography fontSize={12} color={COLORS.text_grey}>
            웨딩 메이크업
          </Typography>
          <Typography fontWeight={600}>감성웨딩 메이크업</Typography>
          <Row justifyContent={'start'} gap={0.3}>
            <JIcon icon={'star'} />
            <Typography fontSize={10} color={COLORS.p_black}>
              {4.8}
            </Typography>
          </Row>
          <Typography fontSize={12}>아티스트 김제니 / 150,000</Typography>
        </Stack>
      </JButton>
    </Stack>
  );
};
