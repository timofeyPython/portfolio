import { useCallback, useEffect, useState } from "react"
 
 
 

export function AuthPage() {

    const [auth, setAuth] = useState(false)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
 
 
  

    const handleFormChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        if (event.target.id === 'login')
            setLogin(event.currentTarget.value)
        else
            setPassword(event.currentTarget.value)

    }, [setLogin, setPassword])

    const clickAuth = () => ''//setAuth(checkAuth(login, password))
    

    return(
        <div>
            <h1>Страница авторизации</h1>
            <form action="submit">
                <div>
                    <label htmlFor="login">Логин</label>
                    <input 
                        type="text" 
                        id="login"
                        value={login}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input 
                        id="password"
                        type="password" 
                        value={password}
                        onChange={handleFormChange}
                    
                    />
                </div>
                <button type="button" onClick={()=>clickAuth()}>
                    Войти
                </button>

                {auth && <div>Вы авторизованы</div>}
            </form>
        </div>
    )
}