import logo from '../../../../assets/logo-sm.png';
import notice from '../../../../assets/notice.png';
import { JButton } from '../../../../components/JButton';
import { Row } from '../../../../components/Row';
import { useJNavigate } from '../../../../core/routes';

export const Header = () => {
  const navigate = useJNavigate();
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
