import { Service } from "@/libs/modules/Service";
import { IControllersOptions } from "@/types/controllers";
import { models } from "@/libs/database/models";
import { checkParamBody, generateJwt } from "@utils/index";
import bcrypt from "bcrypt";
import { DtoUserLogin, DtoUserRegistration } from "./dto/user";

class UserController extends Service {
  constructor() {
    super();
  }
  @checkParamBody(DtoUserRegistration)
  async registration(...args: IControllersOptions) {
    const [req, res, next] = args;
    const enable = true;
    if (enable) {
      try {
        const { email, password } = req.body;

        if (!email || !password) {
          return next(this.forbidden("Некорректный email или password"));
        }
        const candidate = await models.User.findOne({ where: { email } });
        if (candidate) {
          return next(
            this.forbidden("Пользователь с таким email уже сущевствует")
          );
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await models.User.create({
          email,
          password: hashPassword,
        });
        const token = generateJwt(user);
        return res.json({ token });
      } catch (err) {
        return next(this.internal(err?.message));
      }
    } else {
      return res.status(404).json({ message: "Регистрация отключена Админом" });
    }
  }
  @checkParamBody(DtoUserLogin)
  async login(...args: IControllersOptions) {
    const [req, res, next] = args;
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(this.badRequest("Введите корректные данные!"));
      }

      const user = await models.User.findOne({ where: { email } });
      if (!user) {
        return next(this.forbidden("Не верные учётные данные!"));
      }

      const comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return next(this.forbidden("Не верные учётные данные"));
      }

      const token = generateJwt(user);
      this.logWrite({
        message: `${email} зашёл на сайт его ip ${req.socket.remoteAddress}!`,
        router: req.url,
      });
      return res.json({ token });
    } catch (err) {
      return next(this.internal(err?.message));
    }
  }

  async check(...args: IControllersOptions) {
    const [req, res, next] = args;
    const token = generateJwt(req.user);
    try {
      res.json({
        token,
        user: {
          role: req?.user?.role,
          email: req?.user?.email,
        },
      });
    } catch (e) {
      return next(this.internal(e?.message));
    }
  }
}

export default UserController;
