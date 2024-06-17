import { useState } from 'react'
import './header.scss'


import { useAuth } from '../../services/hooks/useAuth'

export function Header() {

    const [date, setDate] = useState(`${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}`)
    setInterval(()=> setDate(`${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}`), 1000)
    const { info } = useAuth()
    return(
        <>
            <div className="header">
                <div>
                    <label><strong>Мои задания, отдел {info.department}, должность {info.position}, логин {info.login}</strong></label>
                    <span>Время: {date}</span>
                </div>
                
            </div>
        </>
    )
}