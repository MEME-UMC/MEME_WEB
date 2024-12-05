import { JButton } from '@/components/JButton';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Box, Stack } from '@mui/material';

import React from 'react';

interface TabItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const TabItem = ({ children, onClick }: TabItemProps) => {
  return (
    <JButton sx={{ width: '100%' }} onClick={onClick}>
      <Box
        width={'100%'}
        fontSize={14}
        fontWeight={600}
        padding={'12px 0'}
        textAlign={'center'}
      >
        {children}
      </Box>
    </JButton>
  );
};

type TabProps = {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
};
export const Tabs = ({ activeTab, setActiveTab, children }: TabProps) => {
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
