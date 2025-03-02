import dotenv from "dotenv";
dotenv.config();
import "module-alias/register";
import { App } from "@modules/App";
import router from "@routes/route";
import cors from "cors";
import errorMiddleware from "@middleware/errorMiddleware";
import logMiddleware from "@middleware/logMiddleware";

const port = process.env.PORT || 5000;
const app = new App({
  port: +port,
  middleware: [
    cors({
      credentials: true,
    }),
    ["/api", router],
    logMiddleware,
    errorMiddleware,
  ],
});
app.start();
