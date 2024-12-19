'use client';
import { AppBar } from '@/components/AppBar';
import { Stack } from '@mui/material';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Step1 } from './components/Step1';

const Page = () => {
  const [step, setStep] = useState(1);
  return (
    <Stack flex={1}>
      <AppBar
        backIcon
        title="비밀번호 찾기"
        onBack={() => step !== 1 && setStep(step - 1)}
      />
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
        <Step2 onNext={() => setStep(3)} step={step} />
        <Step3 />
      </SwipeableViews>
    </Stack>
  );
};
export default Page;
