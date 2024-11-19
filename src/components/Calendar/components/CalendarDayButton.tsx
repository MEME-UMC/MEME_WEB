import { Stack } from '@mui/material';
import { JButton } from '../../JButton';
import { COLORS } from '../../../core/colors';

type CalendarDayButtonProps = {
  day: number | null;
  idx: number;
  currentYear: number;
  currentMonth: number;
  todayDate: number;
  selectedDate: string | null;
  today: Date;
  handleDateClick: (day: number | null) => void;
};

const getIsPast = (day: number | null, todayDate: number) => {
  return day !== null && day < todayDate;
};

const getIsWeekend = (idx: number) => {
  return idx === 5 || idx === 6;
};

const getIsDisabled = (
  day: number | null,
  currentYear: number,
  currentMonth: number,
  today: Date,
  todayDate: number
) => {
  const isCurrentMonth =
    currentYear === today.getFullYear() &&
    currentMonth === today.getMonth() + 1;
  const isBeforeToday = isCurrentMonth && day !== null && day < todayDate;
  const isBeforeCurrentMonth =
    currentYear < today.getFullYear() ||
    (currentYear === today.getFullYear() &&
      currentMonth < today.getMonth() + 1);

  return isBeforeToday || isBeforeCurrentMonth;
};

const getButtonColor = (
  day: number | null,
  idx: number,
  currentYear: number,
  currentMonth: number,
  today: Date,
  todayDate: number
) => {
  const isPast = getIsPast(day, todayDate);
  const isWeekend = getIsWeekend(idx);

  const isBeforeCurrentMonth =
    currentYear < today.getFullYear() ||
    (currentYear === today.getFullYear() &&
      currentMonth < today.getMonth() + 1);

  const isCurrentMonth =
    currentYear === today.getFullYear() &&
    currentMonth === today.getMonth() + 1;

  if (isBeforeCurrentMonth || (isCurrentMonth && isPast)) {
    return COLORS.gray400; // 회색
  }

  if (
    currentYear > today.getFullYear() ||
    (currentYear === today.getFullYear() && currentMonth > today.getMonth() + 1)
  ) {
    return isWeekend ? COLORS.red_etc : COLORS.p_black;
  }

  return isWeekend ? COLORS.red_etc : COLORS.p_black;
};

export const CalendarDayButton = ({
  day,
  idx,
  currentYear,
  currentMonth,
  todayDate,
  selectedDate,
  today,
  handleDateClick,
}: CalendarDayButtonProps) => {
  const formattedDay = day !== null ? `${day < 10 ? '0' : ''}${day}` : '';
  const formattedDate = `${currentYear}${
    currentMonth < 10 ? '0' : ''
  }${currentMonth}${formattedDay}`;

  const isActive = formattedDate === selectedDate;
  const isDisabled = getIsDisabled(
    day,
    currentYear,
    currentMonth,
    today,
    todayDate
  );
  const buttonColor = getButtonColor(
    day,
    idx,
    currentYear,
    currentMonth,
    today,
    todayDate
  );
  return (
    <Stack position={'relative'} sx={{ width: '14.44444%' }}>
      <JButton
        key={idx}
        sx={{
          position: 'absolute',
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: '400',
          backgroundColor: !isDisabled
            ? isActive
              ? COLORS.primary
              : 'transparent'
            : COLORS.white,
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
};
