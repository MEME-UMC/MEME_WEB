import { useState } from 'react';
import { Step1 } from './components/Step1';
import { useJNavigate } from '../../../core/routes';
import SwipeableViews from 'react-swipeable-views';
import { Stack } from '@mui/material';
import { AppBar } from '../../../components/AppBar';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';

export const FindPasswordPage = () => {
  const navigate = useJNavigate();
  const [step, setStep] = useState(1);
  return (
    <Stack flex={1}>
      <AppBar title="비밀번호 찾기" backIcon />
      <SwipeableViews
        index={step - 1}
        disabled
        containerStyle={{
          width: '100%',
        }}
        style={{
          flex: 1,
          display: 'flex',
        }}
        slideStyle={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Step1 onNext={() => setStep(2)} />
        <Step2 onNext={() => setStep(3)} />
        <Step3 onNext={() => navigate('/login')} />
      </SwipeableViews>
    </Stack>
  );
};
