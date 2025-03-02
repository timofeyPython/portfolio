import axios from "axios";
import { API } from "./constants";
import { toast } from "react-toastify";
import cookie from "cookiejs";

export function clientAPI(options: {
  method: "POST" | "GET" | "PUT" | "DELETE";
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parameters?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}) {
  switch (options.method) {
    case "GET":
      return async () => {
        try {
          let url = `${API}/${options.path}?`;

          if (options?.parameters)
            for (const [key, value] of Object.entries(options?.parameters))
              url += `${key}=${value}&`;

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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
          toast.error(
            Array.isArray(e.response.data?.message)
              ? e.response.data?.message.join(",")
              : e.response.data?.message,
          );
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
          toast.error(
            Array.isArray(e.response.data?.message)
              ? e.response.data?.message.join(",")
              : e.response.data?.message,
          );
          return false;
        }
      };
    case "DELETE":
      return async () => {
        try {
          const url = `${API}/${options.path}?id=${options.parameters}`;
          const response = await axios.delete(url, {
            headers: {
              Authorization: `Bearer ${cookie.get("token")}`,
            },
          });
          if (!response) return false;
          toast.info(response.data?.message);
          return response.data;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
          toast.error(
            Array.isArray(e.response.data?.message)
              ? e.response.data?.message.join(",")
              : e.response.data?.message,
          );
          return false;
        }
      };
    default:
      return () => "";
  }
}
