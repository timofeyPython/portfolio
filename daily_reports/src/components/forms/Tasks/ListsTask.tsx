import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getTasks } from '../../../store/tasks/actions'
import { selectTasks } from '../../../store/selectors'
import { ListTask } from './ListTask'
import './task.scss'
 
export function ListsTasks() {

    const dispatch = useAppDispatch()
    const data = useAppSelector(selectTasks)
 
    useEffect(() => {
        dispatch(getTasks())
    }, [])

    return(
        <div>
            <ul>
                <ListTask
                    data={data}
                    options={
                        {
                            className: 'active',
                            title: 'Активные',
                            show: false
                        }
                    }
                />
                <ListTask
                    data={[]}
                    options={
                        {
                            className: 'inactive',
                            title: 'Завершенные',
                            show: false
                        }
                    }
                />
            </ul>
        </div>
    )
}


 