import { createContext, useState } from "react";
import type { TAuthContext } from '../../types/types'
import { checkAuth } from "../utils/auth";
 

export const AuthContext = createContext<TAuthContext>({
    isAuthenticated: false,
    info: {
        login: '',
        department: '',
        position: '',
        name: ''
    },
    setAuth: (check: boolean) => {return check},
});


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const {isAuth, info} = checkAuth()
    const [isAuthenticated, setAuth] = useState<boolean>(isAuth)
 
    return (
        <AuthContext.Provider value={{ isAuthenticated, info, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}