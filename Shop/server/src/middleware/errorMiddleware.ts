import { ApiError } from "@/libs/modules/Error";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (err, req, res, next) {
  if (err instanceof ApiError)
    return res
      .status(err.status)
      .json({ message: err.message, status: err.status });
  return res.status(500).json({ message: "непредвиденная ошибка!" });
}
