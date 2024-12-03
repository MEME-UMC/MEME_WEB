'use client';

import { Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { Icon, JIcon } from './JIcon';
import { COLORS } from '@/styles/colors';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  icon: Icon;
  label: string;
};

export const JLink = ({ href, icon, label }: Props) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  const color = isActive ? COLORS.primary : COLORS.gray400;
  return (
    <Stack flex={1} alignItems={'center'}>
      <Link href={href} style={{ textDecoration: 'none', color }}>
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
          width={80}
          height={45}
        >
          <JIcon icon={icon} />
          <Typography fontSize={10}>{label}</Typography>
        </Stack>
      </Link>
    </Stack>
  );
};
