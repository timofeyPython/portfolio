import { useState } from "react"
import { History } from './HistoryTask'
import { IData } from "./type"
import { EditTask } from "./EditTask"
import UI from "../../UI"
import Moment from 'react-moment'
 

export function ListTask({data, options}: IData){
 
    const [show, setShow] = useState(options?.show)
    const [id, setId] = useState<string>('')
    const changeTask = (id: string) => setId(id)
    
    return (
        <div className={options && options.className ? `task ${options.className}` : 'task'}>
        <div className='flex'>
            <h3>{ options?.title } </h3>
            <button type="button" className="btn btn-primary" onClick={(()=>setShow(!show))}>{show && 'Скрыть' || 'Показать'}</button>
        </div>
        <div>
        {
            show ? 
            data.length>0 
            ?
            data.map((el)=> {
                return(
                    <div key={el.id} className='list' onClick={(e)=>{
                        const button = e.target as HTMLButtonElement
                        if (button?.type === 'button')
                            e.stopPropagation()
                        else 
                            changeTask(el.id)
                    }}>
                        <div>
                            <div><strong>Задача :</strong>  {el.name}</div>
                            <div><strong>Приоритет : </strong> {el.number}</div>
                            <div><strong>Описание : </strong> {el.description}</div>
                            <div><strong>Статус : </strong> {
                                Array.isArray(el.stage) && el.stage.length > 0 ? el.stage[el?.stage.length-1].status : ''
                            }
                            </div>
                            <div><strong>Старт : </strong><Moment format="DD-MM-YYYY">{el.startTask}</Moment></div>
                            <div><strong>Срок : </strong><Moment format="DD-MM-YYYY">{el.endTask}</Moment></div>
                            <History
                                array={el.stage.steps}
                            />
                        </div>
                    </div>
                )
            })
            : <h3>Нет {options?.className === 'active'? 'активных' : 'завершенных' } заданий</h3>
            : ''

        } 
        </div>
        {
            id && <UI.MyModal>
                <EditTask
                    setId={setId}
                    selectId={id}
                />
            </UI.MyModal>
        }
    </div>
    )
}