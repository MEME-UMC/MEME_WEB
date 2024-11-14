import { Stack, Button, Typography, Tabs, Tab } from '@mui/material';
import { AppBar } from '../../../../components/AppBar';
import SwipeableViews from 'react-swipeable-views';
import { JButton } from '../../../../components/JButton';
import { Row } from '../../../../components/Row';
import { useState } from 'react';
import { COLORS } from '../../../../core/colors';

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export const Step3 = ({ onPrev, onNext }: Props) => {
  const [value, setValue] = useState('one');
  return (
    <>
      <AppBar backIcon title="회원가입" onBack={onPrev} />
      <Stack flex={1} justifyContent={'space-between'}>
        <Tabs
          value={value}
          onChange={(_, val) => setValue(val)}
          indicatorColor="primary"
          sx={{
            minHeight: '2px',
            height: '2px',
            px: 2,
            '& .MuiTabs-flexContainer': {
              gap: 1,
            },
          }}
        >
          <Tab value="one" sx={{ flex: 1, backgroundColor: COLORS.gray300 }} />
          <Tab value="two" sx={{ flex: 1, backgroundColor: COLORS.gray300 }} />
          <Tab
            value="three"
            sx={{ flex: 1, backgroundColor: COLORS.gray300 }}
          />
        </Tabs>
        <SwipeableViews style={{ flex: 1 }}>
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
        </SwipeableViews>
        <Stack padding={2}>
          <Button variant="contained" onClick={onNext}>
            다음
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
