import { ERoles } from "../../types/enum"

export function transcription(str: string) {
    let res = {
        name: '',
        link: ''
    }
    switch (str) {
        case ERoles.EMPLOYEE:
            res.name = 'Управление моими задачами'
            res.link = 'tasks'
        break
        case ERoles.HEAD_OF_DEPARTAMENT:
            res.name = 'Управление подразделением'
            res.link = 'departaments'
        break
        case ERoles.HEAD_OF_GROUPS:
            res.name = 'Управление отделом'
            res.link = 'group'
        break
    }
    
    return res
} 


