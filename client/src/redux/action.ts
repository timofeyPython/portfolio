import { UPDATE_TIME, UPDATE_COUNTER, UPDATE_ANSWER } from './types'

export function updateTime(data: string) {
    return {
        type: UPDATE_TIME,
        data: data
    }
}

export function updateCounter(data: number) {
    return {
        type: UPDATE_COUNTER,
        data: data
    }
}
export function updateAnswer(data: any) {
    return {
        type: UPDATE_ANSWER,
        data: data
    }
}

