import { ApiError } from "@/libs/modules/Error";
import { Log } from "@/libs/modules/Log";

export default function (err, req, res, next) {
  if (err instanceof ApiError)
    Log.write(
      {
        message: err?.message,
        router: req.url,
        method: req.method
      },
      false
    );

  return next(err);
}
