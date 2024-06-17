import { createContext, useState } from "react";
import type { TAuthCheck, TAuthContext } from '../../types/types'
import { checkAuth } from "../utils/auth";

export const AuthContext = createContext<TAuthContext>({
    isAuthenticated: false,
    info: {
        login: '',
        department: '',
        position: '',
    },
    setAuth: () => {},
    setInfo: () => {}
 });


 export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const {infoUser, status} = checkAuth()
    const [isAuthenticated, setAuth] = useState<boolean>(status)
    const [info, setInfo] = useState<TAuthCheck>(infoUser)
 
    return (
        <AuthContext.Provider value={{ isAuthenticated, info, setAuth, setInfo }}>
            {children}
        </AuthContext.Provider>
    )
}