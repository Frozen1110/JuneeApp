import React, { createContext } from 'react';
import * as api from '@junee/api/authentication';
import { findEmployers  } from '@junee/api/employers';
import secureStorage from '@junee/helpers/secureStorage';
import { AuthTokenKey } from '@junee/constants';

const AuthContext = createContext({
  user: null,
  method: 'jwt',
  sendMagicLink: (email: string) => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: (employerId: number, email: string, password: string, firstName: string, lastName: string) => Promise.resolve(),
  checkWorkplace: (employerId: string) => Promise.resolve(0),
});

type Props = {
  children: any
}

type AuthResponse = {
  token: string,
  success: boolean,
}

const AuthProvider = ({ 
  children
}: Props) => {
  const sendMagicLink = async (email: string) => {
    await api.sendMagicLink({ email });
  };

  const register = async (employerId: number, firstName: string, lastName: string, email: string, password: string) => {
    const response = await api.register({
      employerId,
      email,
      password,
      firstName,
      lastName
    });
    const { token } = response.data as AuthResponse;
    secureStorage.setItem(AuthTokenKey, token);
  };

  const logout = async () => {
    await secureStorage.removeItem(AuthTokenKey);
  };

  const checkWorkplace = async (code: string) => {
    const response = await findEmployers({ code });
    if (!response.data) {
      throw new Error("No matching workplace")
    }
    return response.data.employerId;
  }

  return (
    <AuthContext.Provider
      value={{
        user: null,
        method: 'jwt',
        sendMagicLink,
        logout,
        register,
        checkWorkplace,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };