// Определяем тип контекста с двумя полями: isAuthenticated и setAuth
export type TAuthContext = {
    auth: {
        isAuth: boolean; // флаг, показывающий, аутентифицирован ли пользователь
        info: TAuthCheck | null;
        roles: Array<string>;
    }
    setAuth?: (auth: any) => void; // функция для изменения значения isAuthenticated
};

export type TAuthCheck =  {
    login: string;
    department: string;
    position: string;
    name: string;
}