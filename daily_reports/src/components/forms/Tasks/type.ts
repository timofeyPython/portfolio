import { ITasks } from "../../../store/tasks/type";

export interface IData {
    data: Array<ITasks>
    options?: {
        className: 'active' | 'inactive'
        title: string
        show?: boolean
    } 
}