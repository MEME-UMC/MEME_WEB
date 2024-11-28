import { Stack, Typography } from '@mui/material';
import { Row } from '../Row';
import { JButton } from '../JButton';

import { useEffect, useState } from 'react';
import { JIcon } from '../JIcon';
import { CalendarDayButton } from './components/CalendarDayButton';
import { COLORS } from '@/styles/colors';

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
  const [selectedDay, setSelectedDay] = useState<number | null>(todayDate);
  const [selectedDate, setSelectedDate] = useState<string | null>(
    `${currentYear}${currentMonth}${todayDate}`
  );

  const handleDateClick = (day: number | null) => {
    if (day !== null) {
      setSelectedDay(day);
      setSelectedDate(`${currentYear}${currentMonth}${day}`);
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
  }, [currentYear, currentMonth, selectedDay]);

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
            key={index}
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
            return (
              <CalendarDayButton
                key={idx}
                day={day}
                idx={idx}
                currentYear={currentYear}
                currentMonth={currentMonth}
                today={today}
                todayDate={todayDate}
                selectedDate={selectedDate}
                handleDateClick={handleDateClick}
              />
            );
          })}
        </Row>
      ))}
    </Stack>
  );
};

export default Calendar;
