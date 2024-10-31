import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/logo_sm.png';
import notice from '../../../../assets/notice.png';
import { JButton } from '../../../../components/JButton';
import { Row } from '../../../../components/Row';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Row justifyContent={'space-between'} paddingX={2}>
      <img src={logo} />
      <JButton
        sx={{ borderRadius: 6, width: 40, height: 40 }}
        onClick={() => navigate('/notification')}
      >
        <img src={notice} />
      </JButton>
    </Row>
  );
};
