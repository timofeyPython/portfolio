import { IInitalState } from "../types/interfaces"

 export const defaultState: IInitalState = {
    tested: {
        name: null,
        answer: [],
        startDate: new Date(),
        passTime: '',
        answer_count: 0
    }
}

export const normalizeInitialState = (state: any) =>   state ? state : JSON.parse(JSON.stringify(defaultState))
 