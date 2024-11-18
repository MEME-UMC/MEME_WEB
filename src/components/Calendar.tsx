import { Stack, Typography } from '@mui/material';
import { Row } from './Row';
import { JButton } from './JButton';
import { COLORS } from '../core/colors';
import { useEffect, useState } from 'react';
import { JIcon } from './JIcon';

const Calendar = () => {
  const weeks = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  // 현재 날짜 상태
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const todayDate = today.getDate();

  const getMonthDates = (year: number, month: number) => {
    const dates: (number | null)[][] = [];
    const firstDay = new Date(year, month - 1, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    let currentWeek: (number | null)[] = new Array(7).fill(null);

    for (let i = 0; i < lastDate + firstDay; i++) {
      if (i < firstDay) {
        currentWeek[i] = null;
      } else {
        const day = i - firstDay + 1;
        currentWeek[i % 7] = day; // 요일에 날짜 추가
        if (i % 7 === 6 || day === lastDate) {
          dates.push(currentWeek);
          currentWeek = new Array(7).fill(null); // 다음 주 초기화
        }
      }
    }

    return dates;
  };

  const [dates, setDates] = useState(getMonthDates(currentYear, currentMonth));

  // 선택된 날짜 상태
  const [selectedDate, setSelectedDate] = useState<number | null>(todayDate);

  const handleDateClick = (day: number | null) => {
    if (day !== null) {
      setSelectedDate(day);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  useEffect(() => {
    setDates(getMonthDates(currentYear, currentMonth));
  }, [currentYear, currentMonth]);

  return (
    <Stack>
      <Row gap={1}>
        <JButton
          onClick={prevMonth}
          sx={{ width: '20px', height: '20px', borderRadius: '50%' }}
        >
          <JIcon icon="leftArrow" width={6} />
        </JButton>
        <Row gap={1}>
          <Typography fontSize={20} fontWeight={600}>
            {currentYear}.
          </Typography>
          <Typography fontSize={20} fontWeight={600}>
            {currentMonth}
          </Typography>
        </Row>
        <JButton
          onClick={nextMonth}
          sx={{ width: '20px', height: '20px', borderRadius: '50%' }}
        >
          <JIcon icon="rightArrow" width={6} />
        </JButton>
      </Row>
      <Row>
        {weeks.map((week, index) => (
          <Row
            sx={{ width: '14.44444%' }}
            borderBottom={`1px solid ${COLORS.gray400}`}
          >
            <Typography
              key={week}
              textAlign={'center'}
              fontSize={18}
              fontWeight={600}
              color={index === 5 || index === 6 ? 'red' : 'text.primary'}
            >
              {week}
            </Typography>
            <Stack paddingTop={'100%'} />
          </Row>
        ))}
      </Row>
      {dates.map((week, index) => (
        <Row key={index}>
          {week.map((day, idx) => {
            const isPast = day !== null && day < todayDate;
            const isWeekend = idx === 5 || idx === 6;
            const isActive = day === selectedDate; // 활성화 상태 확인
            const isDisabled =
              // 현재 연도와 월에서 오늘 이전 날짜는 비활성화
              (currentYear === today.getFullYear() &&
                currentMonth === today.getMonth() + 1 &&
                day !== null &&
                day < todayDate) ||
              // 이전 연도나 이전 달의 날짜는 모두 비활성화
              currentYear < today.getFullYear() ||
              (currentYear === today.getFullYear() &&
                currentMonth < today.getMonth() + 1);

            const buttonColor =
              // 지난 달 날짜는 비활성화되어 회색 텍스트
              currentYear < today.getFullYear() ||
              (currentYear === today.getFullYear() &&
                currentMonth < today.getMonth() + 1) || // 현재 연도보다 작거나, 같은 연도지만 현재 월보다 작은 경우
              (currentYear === today.getFullYear() &&
                currentMonth === today.getMonth() + 1 &&
                isPast)
                ? COLORS.gray400 // 회색
                : // 다음 달 날짜는 기본 텍스트 색상
                currentYear > today.getFullYear() ||
                  (currentYear === today.getFullYear() &&
                    currentMonth > today.getMonth() + 1)
                ? isWeekend
                  ? COLORS.red_etc
                  : COLORS.p_black
                : isWeekend
                ? COLORS.red_etc
                : COLORS.p_black;
            return (
              <Stack position={'relative'} sx={{ width: '14.44444%' }}>
                <JButton
                  key={idx}
                  sx={{
                    position: 'absolute',
                    textAlign: 'center',
                    fontSize: '18px',
                    fontWeight: '400',
                    backgroundColor: isActive ? COLORS.primary : 'transparent',
                    borderRadius: '50%',
                    color: isActive ? COLORS.white : buttonColor,
                  }}
                  disabled={isDisabled || day === null}
                  onClick={() => handleDateClick(day)}
                >
                  {day || ''}
                </JButton>
                <Stack paddingTop={'100%'} />
              </Stack>
            );
          })}
        </Row>
      ))}
    </Stack>
  );
};

export default Calendar;
