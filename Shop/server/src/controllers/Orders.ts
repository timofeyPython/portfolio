import { models } from "@/libs/database/models";
import { Service } from "@/libs/modules/Service";
import { checkParamBody } from "@/libs/utils";
import { IClassBasicMethod, IControllersOptions } from "@/types/controllers";
import { DtoOrderCreate } from "./dto/order";

class Orders extends Service implements IClassBasicMethod {
  @checkParamBody(DtoOrderCreate)
  async create(...args: IControllersOptions) {
    const [req, res, next] = args;
    try {
      const {
        products,
        price,
        name,
        surname,
        email,
        phone,
        delivery,
        montage,
        comments,
        address,
      } = req.body;

      await models.Orders.create({
        products,
        price,
        name,
        surname,
        email,
        phone,
        delivery,
        montage,
        comments,
        address,
      });

      return res.json({ message: "Заказ оформлен !" });
    } catch (e) {
      next(this.internal(e.message));
    }
  }

  async update() {}

  async delete() {}

  async getAll() {}
}

export default Orders;
