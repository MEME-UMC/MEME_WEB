import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Row } from './Row';
import { COLORS } from '@/styles/colors';

type CounterProps = {
  targetNumber: number | string;
  fontSize: number;
  fontWeight?: number;
  color?: string;
};

const Counter = ({
  targetNumber,
  fontSize,
  fontWeight = 400,
  color,
}: CounterProps) => {
  const [displayedNumbers, setDisplayedNumbers] = useState<string[]>([]);
  // 쉼표가 포함된 숫자 문자열을 처리하여 배열로 변환
  const numberString = String(targetNumber).replace(/,/g, '');
  const formattedString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 숫자에 쉼표 추가
  const numberArray = Array.from(formattedString); // 쉼표를 포함한 배열로 변환

  const commaCount = (formattedString.match(/,/g) || []).length; // 쉼표 개수 계산
  const numberLengthWithoutCommas = numberArray.length - (commaCount + 1); // 쉼표 제외한 숫자 길이

  useEffect(() => {
    setDisplayedNumbers(new Array(numberArray.length).fill('')); // 빈 배열로 초기화

    // 각 숫자를 차례로 표시
    numberArray.forEach((num, index) => {
      setTimeout(() => {
        setDisplayedNumbers((prev) => {
          const updatedNumbers = [...prev];
          updatedNumbers[index] = num.toString(); // 각 숫자를 차례로 표시
          return updatedNumbers;
        });
      }, (index * 1000) / numberArray.length); // 각 숫자가 순서대로 나타나도록 딜레이
    });
  }, [targetNumber]);
  return (
    <Row
      justifyContent={'left'}
      style={{ minWidth: `${numberLengthWithoutCommas * 1.14}ch` }}
      sx={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {displayedNumbers.map((num, index) => (
        <Typography
          key={index}
          style={{
            fontSize,

            transform: `translateY(${num ? 0 : '20px'})`,
            opacity: num ? 1 : 0,
            transition: 'transform 0.4s ease, opacity 0.4s ease',
            transitionDelay: `${index * 0.1}s`,
            fontWeight: fontWeight,
            color: color ? color : COLORS.p_black,
          }}
        >
          {num}
        </Typography>
      ))}
    </Row>
  );
};

export default Counter;
