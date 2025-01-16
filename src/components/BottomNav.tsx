'use client';
import { Row } from './Row';
import { JLink } from './JLink';
import { usePathname } from 'next/navigation';

export const BottomNav = () => {
  const pathname = usePathname();

  if (pathname.startsWith('/artist')) {
    return (
      <Row component={'nav'}>
        <JLink href='/artist/home' icon='home' label='홈' />
        <JLink href='/artist/reservation' icon='reservation' label='예약' />
        <JLink href='/artist/schedule' icon='calendar' label='일정' />
        <JLink href='/mypage' icon='user' label='my' />
      </Row>
    );
  }

  return (
    <Row component={'nav'}>
      <JLink href='/' icon='home' label='홈' />
      <JLink href='/model/reservation' icon='reservation' label='예약' />
      <JLink href='/mypage' icon='user' label='MY' />
    </Row>
  );
};
