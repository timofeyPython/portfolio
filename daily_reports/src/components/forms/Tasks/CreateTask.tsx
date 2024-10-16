import { useState } from "react"
import UI from "../../UI/index"

const data = {
    options: [
        {
            value: 'uuid0',
            description: 'Значение по умолчанию'
        },
        {
            value: 'uuid1',
            description: '1'
        },
        {
            value: 'uuid2',
            description: '2'
        }
    ],
    label: 'Выберите приоритет задачи'
}



export function CreateTask(set: {setShow: ((show: boolean)=>void )}) {

    
    const [task, setTask] = useState('')
    const [priority, setPriority] = useState<null | string>(null) 
    const [description, setDescription] = useState('')
    const [endDate, setEndDate] = useState(new Date());
     
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const createEntry = () => {
 
        if (task && description) {
            console.log('Запись создана', {
                id: 'uuid',
                priority: priority,
                name: task,
                content: description,
                status: 'В работе',
                dateEnd: endDate
            })

            set.setShow(false)
        } else {
            console.log('Введите задачу и описание задачи !')
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
                    <UI.MySelect
                        options={data.options}
                        label={data.label}
                        setPriority={setPriority}
                    /> 
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

                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="date" className="col-form-label">Срок выполнения: </label>
                    </div>
                    <div className="col-auto">
                        <UI.MyDatepicker
                            selected={endDate} onChange={(date) => setEndDate(date)}
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