'use client';
import { Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, children }: ModalProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && document) {
      let root = document.getElementById('modal-wrap');
      if (!root) {
        root = document.createElement('div');
        root.id = 'modal-wrap';
        document.body.appendChild(root);
      }
      setModalRoot(root);
    }
  }, []);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <Stack
      position="fixed"
      width="100%"
      height="100vh"
      top={0}
      left={0}
      bgcolor="rgba(0, 0, 0, 0.5)"
      zIndex={999}
    >
      {children}
    </Stack>,
    modalRoot
  );
};
