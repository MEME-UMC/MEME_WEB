'use client';
import { Stack, Button } from '@mui/material';
import { AppBar } from '../../../../components/AppBar';
import SwipeableViews from 'react-swipeable-views';
import { useMemo, useState } from 'react';
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
  const [data, setData] = useState({
    type: '',
    name: '',
    nickname: '',
  });

  const isActiveNext = useMemo(() => {
    if (index === 0 && data.type !== '') {
      return true;
    }
    if (index === 1 && data.name !== '' && data.nickname !== '') {
      return true;
    }
    if (index === 2) {
      return true;
    }
    return false;
  }, [index, data]);

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
          <Step3Part1
            type={data.type}
            onSelectType={(type) => {
              setData({ ...data, type });
            }}
          />
          <Step3Part2
            name={data.name}
            onName={(name) => {
              setData({ ...data, name });
            }}
            nickname={data.nickname}
            onNickname={(nickname) => {
              setData({ ...data, nickname });
            }}
          />
          <Step3Part3 />
        </SwipeableViews>
        <Stack padding={2}>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!isActiveNext}
          >
            다음
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
