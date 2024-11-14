import { useState } from 'react';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { useJNavigate } from '../../../core/routes';

export const JoinPage = () => {
  const navigate = useJNavigate();
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && (
        <Step1
          onPrev={() => {
            navigate(-1);
          }}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <Step2 onPrev={() => setStep(1)} onNext={() => setStep(3)} />
      )}
    </>
  );
};
