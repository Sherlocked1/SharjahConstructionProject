import React, { createContext, ReactNode, useState } from 'react';

export interface DialogContextType {
  isOpen: boolean;
  openDialog: (title: string, content: React.ReactNode) => void;
  title:string,
  body:ReactNode,
  closeDialog: () => void;
}

export const DialogContext = createContext<DialogContextType>({
  title:"",
  body:null,
  isOpen: false,
  openDialog: (title: string, content: React.ReactNode) => {},
  closeDialog: () => {},
});
