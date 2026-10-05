import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("shopzoneUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email, password) => {
    if (!email || !password) {
      return false;
    }

    const loggedUser = {
      name: email.split("@")[0],
      email,
    };

    localStorage.setItem(
      "shopzoneUser",
      JSON.stringify(loggedUser)
    );

    setUser(loggedUser);

    return true;
  };

  const register = (name, email, password) => {
    if (!name || !email || !password) {
      return false;
    }

    const newUser = {
      name,
      email,
    };

    localStorage.setItem(
      "shopzoneUser",
      JSON.stringify(newUser)
    );

    setUser(newUser);

    return true;
  };

  const logout = () => {
    localStorage.removeItem("shopzoneUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}