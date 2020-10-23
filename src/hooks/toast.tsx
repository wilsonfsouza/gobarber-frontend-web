import React, { useContext, createContext, useCallback } from 'react';
import ToastContainer from '../components/ToastContainer';

interface ToastContextProps {
  addToast(): void;
  removeToast(): void;
}
const toastContext = createContext<ToastContextProps>({} as ToastContextProps);

const ToastProvider: React.FunctionComponent = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <toastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
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
