import { useCallback, useState } from "react"
import { autheciate } from "../../services/auth"
import  './form.scss'

export function Form() {

    const [auth, setAuth] = useState(false)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
 
    const handleFormChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        if (event.target.id === 'login')
            setLogin(event.currentTarget.value)
        else
            setPassword(event.currentTarget.value)

    }, [setLogin, setPassword])

    const clickAuth = () => setAuth(autheciate(login, password))
    return(
        <div className="page">
 
        <div className="content">
             
            <form action="submit">
                <h1>Страница авторизации</h1>
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

    </div>
    )
}