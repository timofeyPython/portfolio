import { clientAPI } from "./clientApi";
import cookie from "cookiejs";

export async function logIn(login: string, password: string) {
  const api = clientAPI({
    method: "POST",
    path: "auth/login",
    data: {
      login,
      password,
    },
  });
  const validation = await api();
  if (validation && validation.token)
    cookie.set("token", validation.token, {
      expires: 7,
      secure: true,
    });

  return validation;
}

export async function checkAuth() {
  const api = clientAPI({
    method: "GET",
    path: "auth/check",
  });
  const validation = await api();
  if (validation && validation.refreshToken)
    cookie.set("token", validation.refreshToken, {
      expires: 7,
      secure: true,
    });
  else cookie.remove("token");

  return validation;
}

export async function getInfo() {
  const api = clientAPI({
    method: "GET",
    path: "info",
  });

  const info = await api();
  return info;
}
