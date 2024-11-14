import { useState } from 'react';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { useJNavigate } from '../../../core/routes';
import SwipeableViews from 'react-swipeable-views';

export const JoinPage = () => {
  const navigate = useJNavigate();
  const [step, setStep] = useState(1);

  return (
    <>
      <SwipeableViews
        index={step - 1}
        disabled
        style={{
          flex: 1,
          display: 'flex',
        }}
        slideStyle={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Step1
          onPrev={() => {
            navigate(-1);
          }}
          onNext={() => setStep(2)}
        />
        <Step2 onPrev={() => setStep(1)} onNext={() => setStep(3)} />
      </SwipeableViews>
    </>
  );
};
