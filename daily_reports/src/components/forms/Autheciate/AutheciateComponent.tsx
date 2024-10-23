import { useCallback, useState } from "react"
import { logIn } from "../../../services/utils/auth"
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { selectUser } from "../../../store/selectors"
import { getAuth } from "../../../store/user/actions"
import  './autheciate.scss'
 

export function Autheciate() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const user = useAppSelector(selectUser)
    const dispath = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/main'
 
    const handleFormChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        if (event.target.id === 'login')
            setLogin(event.currentTarget.value)
        else
            setPassword(event.currentTarget.value)

    }, [setLogin, setPassword])

    const clickAuth = async () => {
        const request = await logIn(login, password)
        if (request) {
            dispath(getAuth())
            navigate(from, { replace: true })
        }
    }
 
    return(
        user.isAuth ?      
        <Navigate to="/main" replace /> 
        :
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
                </form>
            </div>
        </div>
    )
}