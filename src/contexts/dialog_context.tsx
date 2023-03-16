import React, { createContext, useState } from 'react';

export interface DialogContextType {
  isOpen: boolean;
  openDialog: (title: string, content: React.ReactNode) => void;
  closeDialog: () => void;
}

export const DialogContext = createContext<DialogContextType>({
  isOpen: false,
  openDialog: () => {},
  closeDialog: () => {},
});
