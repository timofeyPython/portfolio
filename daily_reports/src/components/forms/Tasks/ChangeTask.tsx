
// const dataStatus = [
//     {
//         value: 'В паузе',
//         description: 'uuid1'  
//     },
//     {
//         value: 'В работе',
//         description: 'uuid2' 
//     },
//     {
//         value: 'Тест',
//         description: 'uuid3'  
//     }, 
//     {
//         value: 'Выполнено',
//         description: 'uuid3'
//     }
// ]

export function ChangeTask(task: {id: string}) {
    
    return(
        <div>
            <div>
                <h4>Выбрано: {task.id}</h4>
            </div>
        </div>
    )
}