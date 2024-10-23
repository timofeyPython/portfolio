import { useState } from 'react'
import './header.scss'


import { useAuth } from '../../../services/hooks/useAuth'

export function Header() {

    const [date, setDate] = useState(`${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}`)
    setInterval(()=> setDate(`${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}`), 1000)
    // const { auth } = useAuth()
    return(
        <>
            <div className="header">
                <div>
                    {/* <span><strong> Отдел:</strong>  {auth?.info?.department} ⚪ <strong> Должность</strong> : {auth?.info?.position} ⚪ <strong> Логин: </strong> {auth?.info?.login} ⚪ <strong>ФИО</strong>: {auth?.info?.name}</span> */}
                    <span>Время: {date}</span>
                </div>
            </div>
        </>
    )
}