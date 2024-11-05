import { Box } from '@mui/material';
import { JButton } from './JButton';
import { Row } from './Row';
import BackButton from '/back-button.png';
import CloseButton from '/close-button.png';
import { ReactNode } from 'react';
import { useJNavigate } from '../core/routes';

type Props = {
  useClose?: boolean;
  children?: ReactNode;
  onBack?: () => void;
};
export const Header = ({ useClose, children, onBack }: Props) => {
  const navigate = useJNavigate();
  return (
    <Row justifyContent={'space-between'}>
      <Box>
        <JButton
          onClick={() => {
            if (onBack) {
              onBack();
            } else {
              navigate(-1);
            }
          }}
        >
          <img src={BackButton} />
        </JButton>
      </Box>
      {children}
      <Box width={24}>
        {useClose && (
          <JButton
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={CloseButton} />
          </JButton>
        )}
      </Box>
    </Row>
  );
};
