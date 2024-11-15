import { useState } from 'react';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { useJNavigate } from '../../../core/routes';
import SwipeableViews from 'react-swipeable-views';
import { Step3 } from './components/Step3';
import { Step4 } from './components/Step4';

export const JoinPage = () => {
  const navigate = useJNavigate();
  const [step, setStep] = useState(1);
  const handleSubmit = () => {
    // submit join
    navigate('/');
  };
  return (
    <>
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
        <Step1
          onPrev={() => {
            navigate(-1);
          }}
          onNext={() => setStep(2)}
        />
        <Step2 onPrev={() => setStep(1)} onNext={() => setStep(3)} />
        <Step3 onPrev={() => setStep(2)} onNext={() => setStep(4)} />
        <Step4
          isActive={step === 4}
          onPrev={() => setStep(3)}
          onNext={handleSubmit}
        />
      </SwipeableViews>
    </>
  );
};
