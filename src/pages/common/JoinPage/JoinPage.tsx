import { Button, Checkbox, Stack, Typography } from '@mui/material';
import { JIcon } from '../../../components/JIcon';
import { Row } from '../../../components/Row';
import { JButton } from '../../../components/JButton';
import { useState } from 'react';
import { COLORS } from '../../../core/colors';

export const JoinPage = () => {
  const [apple, setApple] = useState(false);
  // const [banana, setBanana] = useState(false);
  return (
    <Stack flex={1} justifyContent={'space-between'}>
      <Stack px={2} pt={4}>
        <Typography fontWeight={400}>
          메메를 사용하기 위해
          <br />
          이용 약관에 동의해주세요.
        </Typography>
        <Row justifyContent={'start'}>
          <Checkbox
            checked={apple}
            onClick={() => {
              setApple(!apple);
            }}
            icon={<JIcon icon="circle-unchecked" />}
            checkedIcon={<JIcon icon="circle-checked" />}
          />
          <JButton
            sx={{
              justifyContent: 'start',
            }}
            onClick={() => {
              setApple(!apple);
            }}
            rippleColor={COLORS.white}
          >
            <Typography fontWeight={600}>전체 동의</Typography>
          </JButton>
        </Row>
      </Stack>

      <Stack padding={2}>
        <Button variant="contained">다음</Button>
      </Stack>
    </Stack>
  );
};
