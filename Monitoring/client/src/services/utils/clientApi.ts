/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { API } from "./constants";
import { toast } from "react-toastify";
import cookie from "cookiejs";
import { IClientApiOption } from "@/types/general";

function handleError(e: unknown) {
  if (
    typeof e === "object" &&
    e !== null &&
    "response" in e &&
    typeof (e as any).response === "object" &&
    (e as any).response !== null &&
    "data" in (e as any).response &&
    typeof (e as any).response.data === "object" &&
    (e as any).response.data !== null &&
    "message" in (e as any).response.data
  ) {
    // Безопасно работаем с сообщениями
    toast.error(
      Array.isArray((e as any).response.data.message)
        ? (e as any).response.data.message.join(",")
        : (e as any).response.data.message,
    );
  } else {
    console.error("Неожиданная ошибка:", e); // Логирование или обработка другой ошибки
  }
}

export function clientAPI<T>(
  options: IClientApiOption<object>,
): () => Promise<T> {
  switch (options.method) {
    case "GET":
      return async () => {
        try {
          let url = `${API}/${options.path}?`;

          if (options?.parameters)
            for (const [key, value] of Object.entries(options?.parameters))
              if (value) url += `${key}=${value}&`;

          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${cookie.get("token")}`,
            },
          });

          return response.data;
        } catch (e) {
          console.log("ERORR: request GET");
          return null;
        }
      };

    case "POST":
      return async () => {
        try {
          const url = `${API}/${options.path}`;
          const response = await axios.post(url, options.data, {
            headers: {
              Authorization: `Bearer ${cookie.get("token")}`,
            },
          });

          if (!response) return false;

          toast.success(response.data?.message);
          return response.data;
        } catch (e) {
          handleError(e);
          return false;
        }
      };
    case "PUT":
      return async () => {
        try {
          const url = `${API}/${options.path}`;
          const response = await axios.put(url, options.data, {
            headers: {
              Authorization: `Bearer ${cookie.get("token")}`,
            },
          });

          if (!response) return false;

          toast.info(response.data?.message);
          return response.data;
        } catch (e) {
          handleError(e);
          return false;
        }
      };
    case "DELETE":
      return async () => {
        try {
          let url = `${API}/${options.path}?`;
          if (options?.parameters)
            for (const [key, value] of Object.entries(options?.parameters))
              url += `${key}=${value}&`;
          const response = await axios.delete(url, {
            headers: {
              Authorization: `Bearer ${cookie.get("token")}`,
            },
          });
          if (!response) return false;
          toast.info(response.data?.message);
          return response.data;
        } catch (e) {
          handleError(e);
          return false;
        }
      };
  }
}
