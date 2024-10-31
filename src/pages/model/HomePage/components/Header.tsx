import logo from '../../../../assets/logo_sm.png';
import notice from '../../../../assets/notice.png';
import { Row } from '../../../../components/Row';

export const Header = () => {
  return (
    <Row justifyContent={'space-between'} paddingX={2}>
      <img src={logo} />
      <img src={notice} />
    </Row>
  );
};
