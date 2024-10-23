import { clientAPI } from "./api"
  
export async function logIn(login: string, password: string) {
        
        const api = clientAPI(
                {
                        method: 'POST',
                        path: 'auth/login',
                        data: {
                                login,
                                password
                        }
                }
        )
        const validation = await api()
        return validation 
}

export async function checkAuth() { 
 
        const api = clientAPI(
                {
                        method: 'GET',
                        path: 'auth/check'
                }
        )
        const validation = await api()
        return  validation
}