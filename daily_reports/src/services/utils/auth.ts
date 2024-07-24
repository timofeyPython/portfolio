
export function logIn(login: string, password: string) {
        if (!login || !password) alert('Не введы данные для ввода!') 
        if (login === 'user' && password === '123') return true
        return false 
}

export function checkAuth() {

        // async logic
        console.log('auth')
        return {
              isAuth: true,
              info: {
                login: 'ttep001',
                name: 'Тепаев Т.Н.',
                department: 'ОРиПИС',
                position: 'Начальник отдела',
                rights: ['admin']
              }
        }
}