import cookie from "cookiejs";

const initialState = (): {
  isAuth: boolean;
  info: {
    roles: Array<string>;
    login: string;
    departament: string;
    position: string;
    name: string;
    id: string;
    grId: string;
  };
} => ({
  isAuth: cookie.get("token") ? true : false,
  info: {
    roles: [],
    login: "",
    departament: "",
    position: "",
    name: "",
    id: "",
    grId: "",
  },
});

export default initialState;
