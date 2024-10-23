import { useEffect, useState } from "react";
import { ITasks } from "../../../store/tasks/type";
import { clientAPI } from "../../../services/utils/api";

export interface ISelectTask {
    selectId: string;
    setId: ((show: string)=> void)
}
 
export function EditTask({setId, selectId}: ISelectTask) {
    
    const [selectTask, setSelectTask] = useState<ITasks | null>(null)
  
    useEffect(()=> {
        const api = clientAPI({
            method: 'GET',
            path: `tasks/${selectId}`
        })

        const fetchData = async() => {
            const response = await api()
            setSelectTask(response)
        }

        fetchData()
    }, [])

    return(
        <div className="selectTask">
            <h3>Задача: {selectTask?.name}</h3>
            <div>
                <button onClick={()=>setId('')}>Выйти</button>
            </div>
        </div>
    )
}