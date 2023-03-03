import { createContext, useContext } from 'react';
import { object } from 'prop-types';
import LoginContext from '../LoginContext/LoginContext';
import RegisterContext from '../RegisterContext/RegisterContext';

function AppContextProvider({ children }) {
  const { resultLogin, handlerLogin } = useContext(LoginContext);
  const {
    registerInfo,
    handleRegisterInfoChange,
    handleRegister,
    resultRegister,
  } = useContext(RegisterContext);

  const appState = useMemo(() => ({
    resultLogin,
    handlerLogin,
    registerInfo,
    handleRegisterInfoChange,
    handleRegister,
    resultRegister,
  }), [
    resultLogin,
    handlerLogin,
    registerInfo,
    handleRegisterInfoChange,
    handleRegister,
    resultRegister,
  ]);
  return <AppContext.Provider value={ appState }>{children}</AppContext.Provider>;
}

AppContextProvider.propTypes = {
  children: object,
}.isrequired;

export { AppContext, AppContextProvider };
