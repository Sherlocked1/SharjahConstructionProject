import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { ReactNode } from 'react';
import MyButton from './my_button';

interface DialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
  children: ReactNode
}

const MyDialog: React.FC<DialogProps> = ({ title, isOpen, onClose, children ,onClick}) => {
  const handleClose = () => { onClose(); };
  const handleClick = () => { onClick(); }

  return (
    <Dialog maxWidth="xs" fullWidth onClose={handleClose} open={isOpen}>
      <DialogTitle className='text-center' style={{ color: 'green' }}>
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions disableSpacing={true}>
        <MyButton onClick={handleClick} title='حسنا'/>
      </DialogActions>
    </Dialog>
  );
};

export default MyDialog;