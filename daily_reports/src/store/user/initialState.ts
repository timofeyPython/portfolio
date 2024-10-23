const user :{
    isAuth: boolean
    roles: Array<string>
    info: {
        login: string
        departament: string
        position: string
        name: string
        id: string
        grId: string
    }
}= {
    isAuth: true,
    roles: [],
    info: {
        login: '',
        departament: '',
        position: '',
        name: '',
        id: '',
        grId: ''
    }
}

export default user