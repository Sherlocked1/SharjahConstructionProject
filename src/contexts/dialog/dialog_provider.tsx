import React, { ReactNode, useState } from 'react';
import { DialogContextType } from './dialog_context';
import { DialogContext } from './dialog_context';

export interface DialogProviderProps {
    children:ReactNode
}

const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState<React.ReactNode>(null);

  const openDialog = (title: string, content: React.ReactNode) => {
    setIsOpen(true);
    setTitle(title);
    setContent(content);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setTitle('');
    setContent(null);
  };

  const value: DialogContextType = {
    title,
    body:content,
    isOpen,
    openDialog,
    closeDialog,
  };

  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>;
};

export default DialogProvider