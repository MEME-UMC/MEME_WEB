'use client';
import { AppBar } from '@/components/AppBar';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import WriteProfile from './components/WriteProfile';
import ChoiceLocation from './components/ChoiceLocation';
import ChocieSpecialization from './components/ChocieSpecialization';
import { Stack } from '@mui/material';
import { TabIndicator } from '@/app/(guest)/join/components/TabIndicator';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const onSubmit = () => {};
  const onNext = () => {
    if (step !== 3) {
      setStep(step + 1);
    } else {
      onSubmit();
    }
  };
  const onPrev = () => {
    if (step !== 1) {
      setStep(step - 1);
    } else {
      router.replace('/artist/home');
    }
  };
  return (
    <Stack height={'100%'}>
      <AppBar title='프로필 입력' backIcon onBack={onPrev} />
      <Stack height={'100%'} px={2} pb={3}>
        <TabIndicator index={step - 1} count={3} />
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
          <WriteProfile onNext={() => onNext()} />
          <ChoiceLocation onNext={() => onNext()} />
          <ChocieSpecialization onNext={() => onNext()} />
        </SwipeableViews>
      </Stack>
    </Stack>
  );
};
export default Page;
