import { IStoreUser } from "@/types/store";
import cookie from "cookiejs";

const initialState = (): IStoreUser => ({
  isAuth: cookie.get("token") ? true : false,
  info: {
    login: "",
    position: "",
    name: "",
    id: "",
    rights: {
      user: { role: "" },
      group: [],
    },
  },
});

export default initialState;
