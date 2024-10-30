import { Stack } from '@mui/material';
import { Row } from './Row';
import { ReactNode } from 'react';
import { MotionWrapper } from './MotionWrapper';

type Props = {
  children?: ReactNode | ReactNode[];
  footer?: ReactNode;
};

export const Layout = ({ children, footer }: Props) => {
  return (
    <MotionWrapper height={'100%'}>
      <Stack
        className="bg-ivory"
        sx={{
          height: '100%',
        }}
        justifyContent={'space-between'}
      >
        <Stack pt={5} px={3} flex={1} overflow={'hidden'}>
          {children}
        </Stack>
        {footer && (
          <Row pb={7} pt={1}>
            {footer}
          </Row>
        )}
      </Stack>
    </MotionWrapper>
  );
};
