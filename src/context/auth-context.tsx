import React, { ReactNode, createContext, useContext, useState } from 'react';

interface AuthContextData {
  signIn: boolean;
  setSignIn: (data: boolean) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [signIn, setSignIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        setSignIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
