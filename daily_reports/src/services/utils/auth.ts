
export function logIn(login: string, password: string) {
        if (!login || !password) alert('Не введы данные для ввода!') 
        if (login === 'user' && password === '123') return true
        return false 
}

export function checkAuth() {

        // async logic
        console.log('auth')

        return {
   
                status: true,
                infoUser: {
                        login: 'ttep001',
                        department: 'ОРиПИС',
                        position: 'Начальник отдела',
                },
                
        }
}