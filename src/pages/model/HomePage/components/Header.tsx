import logo from '../../../../assets/logo-sm.png';
import { JButton } from '../../../../components/JButton';
import { JIcon } from '../../../../components/JIcon';
import { JImage } from '../../../../components/JImage';
import { Row } from '../../../../components/Row';
import { useJNavigate } from '../../../../core/routes';

export const Header = () => {
  const navigate = useJNavigate();
  return (
    <Row justifyContent={'space-between'} paddingX={2}>
      <JImage src={logo} width={68} height={43} />
      <JButton
        sx={{ borderRadius: 6, width: 40, height: 40 }}
        onClick={() => navigate('/notification')}
      >
        <JIcon icon="notice" />
      </JButton>
    </Row>
  );
};
