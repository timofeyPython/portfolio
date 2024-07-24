import { useCallback, useState } from "react"
import { logIn } from "../../../services/utils/auth"
import  './autheciate.scss'
import { useAuth } from '../../../services/hooks/useAuth';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';

export function Autheciate() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {isAuthenticated, setAuth} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
 
    const handleFormChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        if (event.target.id === 'login')
            setLogin(event.currentTarget.value)
        else
            setPassword(event.currentTarget.value)

    }, [setLogin, setPassword])

    const clickAuth = () => {
        if (logIn(login, password)) {
            setAuth ? setAuth(true) : ''
            navigate(from, { replace: true });
        }
    }
    
    if (isAuthenticated)  {
        return(
            <Navigate to="/" replace />
        )
    }
    
    

    return(
        <div className="page">
            <div className="content">
                <form>
                    <h3>Страница авторизации</h3>
                    <hr/>
                    <div className="block">
                        <label htmlFor="login">Логин:</label>
                        <input 
                            type="text" 
                            id="login"
                            value={login}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="block">
                        <label htmlFor="password">Пароль:</label>
                        <input 
                            id="password"
                            type="current-password" 
                            value={password}
                            onChange={handleFormChange}
                        
                        />
                    </div>
                    <div style={{textAlign: 'end'}}>
                        <button  type="button" className="btn btn-outline-primary" onClick={()=>clickAuth()}>
                            Войти
                        </button>
                    </div>

                    {isAuthenticated && <div>Вы авторизованы</div>}
                </form>
            </div>
        </div>
    )
}