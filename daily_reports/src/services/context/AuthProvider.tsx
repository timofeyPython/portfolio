import { createContext, useEffect, useState } from "react";
import type { TAuthContext } from '../../types/types'
import { checkAuth } from "../utils/auth";
 

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
        (async ()=> { 
            try {
                const res = await checkAuth()
                setAuth(res)
            } catch (e) {
                console.log('Ошибка:', e)
                setAuth({isAuth: false})
            }
        })()
    }, [])

 
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}