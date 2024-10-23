import { Link } from 'react-router-dom';
import { transcription } from '../../../services/utils/halper'
import './main.scss'
import { useAppSelector } from '../../../store/hooks';
import { selectUser } from '../../../store/selectors';

export function Main() {
    const user = useAppSelector(selectUser)
    return(
        <>
            <div className='main'>
                    <h1>Главная страница приложения Monitoring</h1>
                    <hr />
                    <div>
                        Данное приложение предназначено для автоматизации назначения задач сотрудникам
                    </div>
                    <br />
                    <div>
                        <span>Вам доступны следующие элементы управления</span>
                        <div>
                            <ul>
                                {
                                    user?.roles && user.roles.map((role)=> (
                                       <li key={role}><Link to={`/${transcription(role).link}`}>{transcription(role).name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
            </div>
        </>
    )
}