import React, { createContext, useCallback, useState } from 'react';
import { ObjectLiteralElement } from 'typescript';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextProps {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

interface AuthDataProps {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthDataProps>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthDataProps;
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setAuthData({ token, user });
  }, []);
  return (
    <AuthContext.Provider value={{ user: authData.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };