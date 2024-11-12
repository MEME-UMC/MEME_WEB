import { Stack, Typography } from '@mui/material';

import { COLORS } from '../../../../core/colors';
import { JButton } from '../../../../components/JButton';
import React from 'react';
import { Row } from '../../../../components/Row';

interface TabItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

const TabItem = ({ children, onClick }: TabItemProps) => {
  return (
    <JButton sx={{ width: '100%' }} onClick={onClick}>
      <Typography
        width={'100%'}
        fontSize={14}
        fontWeight={600}
        padding={'12px 0'}
        textAlign={'center'}
      >
        <Row>{children}</Row>
      </Typography>
    </JButton>
  );
};

type TabProps = {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
};
const Tabs = ({ activeTab, setActiveTab, children }: TabProps) => {
  return (
    <Stack position={'relative'}>
      <Row>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child as React.ReactElement, {
            onClick: () => setActiveTab(index),
          });
        })}
      </Row>
      <Stack
        position={'absolute'}
        width={'100%'}
        height={'3px'}
        sx={{ background: `${COLORS.gray300}` }}
        borderRadius={'5px'}
        bottom={0}
        overflow={'hidden'}
      >
        <Stack
          position={'absolute'}
          top={0}
          left={`calc(${activeTab * 50}% )`}
          width={'50%'}
          height={'100%'}
          borderRadius={'5px'}
          sx={{
            background: `${COLORS.primary}`,
            transitionDuration: '0.3s',
          }}
        ></Stack>
      </Stack>
    </Stack>
  );
};

export { Tabs, TabItem };
