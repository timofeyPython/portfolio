 import { UPDATE_TIME, START_DATE, UPDATE_COUNTER, UPDATE_ANSWER } from './types'

export function rootReducer (state: any, action: {type: string, data: any}) {
    
    let field, val
 
    switch (action.type) {
        case UPDATE_TIME:
            state.tested.passTime = action.data
            return {...state}
        case START_DATE:
            state.tested.startDate = action.data
            return {...state}
        case UPDATE_COUNTER:
            state.tested.answer_count = action.data
            return {...state}
        case UPDATE_ANSWER:
            state.tested.answer.push(action.data)
            return {...state}
        
            
        default: return state
    }
}