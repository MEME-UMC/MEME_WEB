import { useState } from 'react';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { useJNavigate } from '../../../core/routes';
import SwipeableViews from 'react-swipeable-views';
import { Stack } from '@mui/material';
import { AppBar } from '../../../components/AppBar';

export const FindEmailPage = () => {
  const navigate = useJNavigate();
  const [step, setStep] = useState(1);
  return (
    <Stack flex={1}>
      <AppBar title="이메일 찾기" backIcon />
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
        <Step2 onNext={() => navigate('/login')} />
      </SwipeableViews>
    </Stack>
  );
};
