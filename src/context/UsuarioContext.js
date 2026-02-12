import { createContext, useState } from "react";

const UsuarioContext = createContext(null);

const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const login = (user) => {
    setUsuario(user);
  };

  const logout = () => {
    setUsuario(null);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export { UsuarioContext, UsuarioProvider };
