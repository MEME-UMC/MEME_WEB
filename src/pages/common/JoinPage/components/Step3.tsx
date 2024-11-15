import { Stack, Button } from '@mui/material';
import { AppBar } from '../../../../components/AppBar';
import SwipeableViews from 'react-swipeable-views';
import { useState } from 'react';
import { TabIndicator } from './TabIndicator';
import { Step3Part1 } from './Step3Part1';
import { Step3Part3 } from './Step3Part3';
import { Step3Part2 } from './Step3Part2';

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export const Step3 = ({ onPrev, onNext }: Props) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) {
      onPrev();
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index === 2) {
      onNext();
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <>
      <AppBar backIcon title="회원가입" onBack={handlePrev} />
      <Stack flex={1} justifyContent={'space-between'}>
        <TabIndicator index={index} count={3} />
        <SwipeableViews index={index} disabled style={{ flex: 1 }}>
          <Step3Part1 />
          <Step3Part2 />
          <Step3Part3 />
        </SwipeableViews>
        <Stack padding={2}>
          <Button variant="contained" onClick={handleNext}>
            다음
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
