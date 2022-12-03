import React, {useState, createContext} from 'react';

// Create context
export const AuthContext = createContext({
  user: undefined,
  login: () => {},
  logout: () => {},
});

// Provider
// Actions of the context
export const AuthProvider = props => {
  const {children} = props;
  const [auth, setAuth] = useState(undefined);

  const login = userData => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(undefined);
  };

  const valueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};
