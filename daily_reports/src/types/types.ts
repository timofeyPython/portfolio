// Определяем тип контекста с двумя полями: isAuthenticated и setAuth
export type TAuthContext = {
    isAuthenticated: boolean; // флаг, показывающий, аутентифицирован ли пользователь
    setAuth?: (auth: boolean) => void; // функция для изменения значения isAuthenticated
    info: TAuthCheck
};

export type TAuthCheck =  {
    login: string;
    department: string;
    position: string;
    name: string;
}