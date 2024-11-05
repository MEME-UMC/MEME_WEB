import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/logo_sm.png';
import { JButton } from '../../../../components/JButton';
import { Row } from '../../../../components/Row';
import { JIcon } from '../../../../components/JIcon';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Row justifyContent={'space-between'} paddingX={2}>
      <img src={logo} />
      <JButton
        sx={{ borderRadius: 6, width: 40, height: 40 }}
        onClick={() => navigate('/notification')}
      >
        <JIcon icon="notice" />
      </JButton>
    </Row>
  );
};
