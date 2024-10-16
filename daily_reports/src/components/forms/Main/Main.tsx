import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useAuth } from '../../../services/hooks/useAuth'
import { transcription } from '../../../services/utils/halper'
import { useAppDispatch } from '../../../store/hooks' 
import { selectTasks } from '../../../store/selectors'
import { addTask, removeTask } from '../../../store/tasks/actions'
import { getTasks } from '../../../store/tasks/api'
 
import './main.scss'


export function Main() {
 
    const {auth} = useAuth()
    const tasks  = useSelector(selectTasks)
    const dispatch = useAppDispatch()

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
                                    auth?.roles && auth.roles.map((role)=> (
                                       <li key={role}><Link to={`/${transcription(role).link}`}>{transcription(role).name}</Link></li>
                                    ))
                                }
                            </ul>
                                
                            <div>
                                <button
                                    aria-label="Increment value"
                                    onClick={() => dispatch(getTasks('id'))}
                                >
                                Получить
                                </button>
                                {
                                    tasks.map(task=> (
                                            <div key={task.id}>
                                                {
                                                    task.name
                                                }
                                            </div>
                                    ))
                                }
                                <button
                                    aria-label="Decrement value"
                                    onClick={() => dispatch(removeTask())}
                                >
                                Удалить
                                </button>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}