import { Row } from './Row';
import { JLink } from './JLink';

export const BottomNav = () => {
  return (
    <Row component={'nav'}>
      <JLink href="/" icon="home" label="홈" />
      <JLink href="/model/reservation" icon="reservation" label="예약" />
      <JLink href="/mypage" icon="user" label="MY" />
    </Row>
  );
};
