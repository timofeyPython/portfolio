// Определяем тип контекста с двумя полями: isAuthenticated и setAuth
export type TAuthContext = {
    isAuthenticated: boolean;
    info: TAuthCheck;
    setAuth: (auth: boolean) => void; // функция для изменения значения isAuthenticated
    setInfo: (info: TAuthCheck) => void;
 
};

export type TAuthCheck =  {
    login: string;
    department: string;
    position: string;
}

  
 