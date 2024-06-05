 

export const defaultState: any = {
    tested: {
        name: 'timofeyJS',
        answer: [],
        startDate: new Date(),
        passTime: '',
        answer_count: 0
    }
}

export const normalizeInitialState = (state: any) =>   state ? state : JSON.parse(JSON.stringify(defaultState))
 