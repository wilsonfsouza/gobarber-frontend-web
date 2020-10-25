import React, { useContext, createContext, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import ToastContainer from '../components/ToastContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextProps {
  addToast(messages: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const toastContext = createContext<ToastContextProps>({} as ToastContextProps);

const ToastProvider: React.FunctionComponent = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        description,
      };
      setMessages(state => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <toastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </toastContext.Provider>
  );
};

function useToast(): ToastContextProps {
  const context = useContext(toastContext);

  if (!context) {
    throw new Error('useToast must be used within a Toast Context.');
  }

  return context;
}

export { useToast, ToastProvider };
