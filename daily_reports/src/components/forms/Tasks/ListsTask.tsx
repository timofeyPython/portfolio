import './style.scss'
import { History } from './HistoryTask'
// import { ChangeTask } from './ChangeTask'

 

const data = [
    {
        id: 'one',
        priority: 1,
        name: 'Первый',
        content: 'ОИК-Нижний: Разворачивание в Нижним Новгороде',
        status: 'В работе',
        stage: [
            {
                date: '12.01.2024',
                status: 'В работе',
                description: 'Взял в работу'
            },
            {
                date: '12.01.2024',
                status: 'В паузе',
                description: 'Ожидание'
            },
            {
                date: '12.01.2024',
                status: 'В работе',
                description: 'В работе'
            },
            {
                date: '12.01.2024',
                status: 'Завершено'
            },
        ],
        dateCreate: '12.01.2024',
        dateEnd: '12.03.2024'
    },
    {
        id: 'two',
        priority: 2,
        name: 'Второй',
        content: 'Описание задачи 2',
        status: 'В паузе',
        stage: [
            {
                date: '12.01.2024',
                status: 'В паузе'
            }
        ],
        dateCreate: '12.01.2024',
        dateEnd: '12.04.2024'
    },
    {
        id: 'three',
        priority: 3,
        name: 'Третий',
        content: 'Описание задачи 3',
        status: 'Завершено',
        stage: [
            {
                date: '12.01.2024',
                status: 'Завершено'
            }
        ],
        dateCreate: '12.01.2024',
        dateEnd: '12.05.2024'
    }
]

export function ListsTasks() {
    
    const changeTask = (id: string) => {
        console.log('click', id)
        return ''
    }

    return(
        <div>
            <ul>
                {
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
                                    <label><strong>Задача:</strong>  {el.name}</label>
                                    <div><strong>Приоритет:</strong> {el.priority}</div>
                                    <div><strong>Описание:</strong> {el.content}</div>
                                    <div><strong>Статус:</strong> {el.status}</div>
                                    <div><strong>Старт:</strong> {el.dateCreate}</div>
                                    <div><strong>Срок:</strong> {el.dateEnd}</div>
                                    <History
                                        array={el.stage}
                                    />
                                </div>
                            </div>
                        )
                    }) 
                }
                         
            </ul>
        </div>
    )
}


 