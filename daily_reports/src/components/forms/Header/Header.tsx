import { useState } from 'react'
import './header.scss'


import { useAuth } from '../../../services/hooks/useAuth'

export function Header() {

    const [date, setDate] = useState(`${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}`)
    setInterval(()=> setDate(`${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}`), 1000)
    const { info } = useAuth()
    return(
        <>
            <div className="header">
                <div>
                    <label><strong> Отдел:</strong>  {info.department} | <strong> Должность</strong> : {info.position} | <strong> Логин: </strong> {info.login} | <strong>ФИО</strong>: {info.name}</label>
                    <span>Время: {date}</span>
                </div>
                
            </div>
        </>
    )
}