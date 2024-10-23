import { createContext, useEffect, useState } from "react";
import type { TAuthContext } from '../../types/types'
import { checkAuth } from "../utils/auth";
import { clientAPI } from "../utils/api";
 

export const AuthContext = createContext<TAuthContext>({
    auth: {
        isAuth: false,
        info: {
            login: '',
            department: '',
            position: '',
            name: ''
        },
        roles: []
    },
    setAuth: (auth: any) => {return auth}
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [auth, setAuth] = useState<any>({
        isAuth: true,
        info: {
            login: '',
            department: '',
            position: '',
            name: ''
        },
        roles: []  
    })
 
    useEffect(()=> { 

        const auth = async () => {
            const validation = await checkAuth()
            setAuth(validation)
        }
       
       auth()
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}