import { useState } from "react"
import UI from "../../UI/index"
import { useSelector } from "react-redux"
import { selectTasks, selectUser } from "../../../store/selectors"
import { toast } from 'react-toastify';
import { useAppDispatch } from "../../../store/hooks";
import { createTask } from "../../../store/tasks/actions";
export function CreateTask(set: {setShow: ((show: boolean)=>void )}) {
 
    const [task, setTask] = useState('')
    const [priority, setPriority] = useState<string | null>(null) 
    const [description, setDescription] = useState('')
    const [endDate, setEndDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date());
    const tasks = useSelector(selectTasks)
    const user = useSelector(selectUser)
    const dispatch = useAppDispatch()
    const optionsUI = {
        optionsSelect: tasks.map((task)=> (
                {
                    value: task.number,
                    description: `${task.number}`
                }   
            )
        ),
        label: 'Выберите приоритет задачи'
    }
    optionsUI.optionsSelect.unshift({
        value: 0,
        description: 'Значение по умолчанию'
    })

    const createEntry = () => {
 
        if (task && description) {
            dispatch(createTask({
                name: task,
                description,
                number: priority ? +priority : tasks.length+1,
                createdUser: {
                    name: user.info.name,
                    id: user.info.id
                },
                assigned: {
                    name: user.info.name,
                    id: user.info.id
                },
                stage: {
                    steps: []
                },
                startTask: startDate,
                endTask: endDate,
                grId: user.info.grId
            }))
            set.setShow(false)
        } else {
            toast.error('Введите задачу и описание задачи !')
        }
    }

    return (
        <>
            <form>
                <h1>Форма создания  задачи</h1>
                <hr />
                <div className="mb-3">
                    <div className="form-floating mb-3">
                        <textarea  
                            className="form-control" 
                            id="task" 
                            style={{height: 100}} 
                            onInput={(e)=> {
                                const val = e.target as HTMLButtonElement
                                setTask(val.value)
                            }}>
                        </textarea>
                        <label htmlFor="task">Задача:</label>
                    </div>
                </div>                
                <div className="mb-3">
                    <div className="form-floating mb-3">
                        <textarea  
                            className="form-control" 
                            id="description" 
                            style={{height: 100}} 
                            onInput={(e)=>{
                                const val = e.target as HTMLButtonElement
                                setDescription(val.value)
                            }}>
                        </textarea>
                        <label htmlFor="description">Описание:</label>
                    </div>
                </div>
                <div className="mb-3">
                    <UI.MySelect
                        options={optionsUI.optionsSelect}
                        label={optionsUI.label}
                        setPriority={setPriority}
                    /> 
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="startDate" className="col-form-label">Старт задания: </label>
                    </div>
                    <div className="col-auto">
                        <UI.MyDatepicker
                            id="startDate" selected={startDate} onChange={(date) => setStartDate(date)}
                        />
                    </div>  
                    <div className="col-auto">
                        <span className="form-text">
                        Возможно изменить после создания
                        </span>
                    </div>
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="endDate" className="col-form-label">Срок выполнения: </label>
                    </div>
                    <div className="col-auto">
                        <UI.MyDatepicker
                            id="endDate" selected={endDate} onChange={(date) => setEndDate(date)}
                        />
                    </div>  
                    <div className="col-auto">
                        <span className="form-text">
                        Возможно изменить после создания
                        </span>
                    </div>
                </div>
                <hr />
                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <button type="button" className="btn btn-success" onClick={()=> createEntry()}>Сохранить</button>
                    <button  type="button" className="btn btn-secondary" onClick={()=> set.setShow(false)}>Закрыть</button>
                </div>
            </form>
        </>
    )
}