export function autheciate(login: string, password: string) {

 
        if (!login || !password) alert('Не введы данные для ввода!') 

        if (login === 'user' && password === '123') return true
        
        return false
 
 
  
}

 