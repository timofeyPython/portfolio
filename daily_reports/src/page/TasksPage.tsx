import { ListsTasks } from "../components/forms/Tasks/ListsTask"
import { CreateTask } from '../components/forms/Tasks/CreateTask'
import { useState } from "react"
import UI  from '../components/UI/index'
 
export function TaskPage() {
    const [show, setShow] = useState(false)
    
    return(
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
                }}>
                <h1>Мои задачи</h1>
                <button type="button" className="btn btn-success" onClick={()=> setShow(true)}>Создать задачу</button>
            </div>
            
            <hr />
            <ListsTasks/>
            {
                show && <UI.MyModal>
                    <CreateTask 
                         setShow={setShow}
                    />
                </UI.MyModal>
            }
        </div>
    )
}