import { API } from "@/utils/constants";
import axios from "axios";

export default async function <T>(options: {
  method: "POST" | "GET" | "PUT" | "DELETE";
  path: string;
  parameters?: any;
  data?: any;
}): Promise<T> {
  switch (options.method) {
    case "GET":
      try {
        let url = `${API}/${options.path}?`;

        if (options?.parameters)
          for (const [key, value] of Object.entries(options?.parameters)) {
            if (!Array.isArray(value)) url += `${key}=${value}&`;
            else if (value.length > 0)
              url += `${key}=${JSON.stringify(value)}&`;
          }

        const response = await axios.get(url, {
          headers: {
            // Authorization: `Bearer ${cookie.get("token")}`,
          },
        });

        return response.data as T;
      } catch (e) {
        console.log("ERORR: request GET");
        return null as T;
      }
    case "POST":
      try {
        const url = `${API}/${options.path}`;
        const response = await axios.post(url, options.data, {
          headers: {
            // Authorization: `Bearer ${cookie.get("token")}`,
          },
        });

        if (!response) return false as T;

        // toast.success(response.data?.message);
        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        // toast.error(
        //   Array.isArray(e.response.data?.message)
        //     ? e.response.data?.message.join(",")
        //     : e.response.data?.message,
        // );
        return false as T;
      }
    case "PUT":
      try {
        const url = `${API}/${options.path}`;
        const response = await axios.put(url, options.data, {
          headers: {
            // Authorization: `Bearer ${cookie.get("token")}`,
          },
        });

        if (!response) return false as T;

        // toast.info(response.data?.message);
        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        // toast.error(
        //   Array.isArray(e.response.data?.message)
        //     ? e.response.data?.message.join(",")
        //     : e.response.data?.message,
        // );
        return false as T;
      }
    case "DELETE":
      try {
        const url = `${API}/${options.path}?id=${options.parameters}`;
        const response = await axios.delete(url, {
          headers: {
            // Authorization: `Bearer ${cookie.get("token")}`,
          },
        });
        if (!response) return false as T;
        // toast.info(response.data?.message);
        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        // toast.error(
        //   Array.isArray(e.response.data?.message)
        //     ? e.response.data?.message.join(",")
        //     : e.response.data?.message,
        // );
        return false as T;
      }
    default:
      return null as T;
  }
}
