/* eslint-disable @typescript-eslint/no-unused-vars */
import { Service } from "@/libs/modules/Service";
import {
  IControllerContext,
  IControllersGetOptions,
  IControllersOptions,
} from "@/types/controllers";
import { DtoCreateType, DtoDeleteType, DtoUpdateType } from "./dto/types";
import { checkParamBody } from "@/libs/utils";
import { models } from "@db/models";

class Types extends Service {
  @checkParamBody(DtoCreateType)
  async createType(...args: IControllersOptions) {
    const [req, res, next, options] = args;
    try {
      const { name } = req.body;
      const type = await options.model.create({ name });
      this.logWrite({
        message: `${options.categoryTitle} "${name}"`,
        router: req.url,
      });
      return res.json({
        message: `${options.categoryTitle} "${name}"`,
        entry: type,
      });
    } catch (e) {
      return next(this.internal(e?.message));
    }
  }

  @checkParamBody(DtoUpdateType)
  async updateType(...args: IControllersOptions) {
    const [req, res, next, options] = args;
    try {
      const { id, name } = req.body;
      await options.model.update({ name }, { where: { id } });
      this.logWrite({
        message: `${options.categoryTitle} "${name}"`,
        router: req.url,
      });
      return res.json({
        message: `${options.categoryTitle} "${name}"`,
      });
    } catch (e) {
      return next(this.internal(e?.message));
    }
  }

  @checkParamBody(DtoDeleteType)
  async deleteType(...args: IControllersOptions) {
    const [req, res, next, options] = args;
    try {
      const { id } = req.body;
      await options.model.destroy({ where: { id } });
      this.logWrite({
        message: `${options.categoryTitle} "${id}"`,
        router: req.url,
      });
      return res.json({
        message: `${options.categoryTitle} "${id}"`,
      });
    } catch (e) {
      return next(this.internal(e?.message));
    }
  }

  async getType(...args: IControllersGetOptions) {
    const [req, res, next, options] = args;
    try {
      const types = await options.model.findAll({
        order: [["name", "ASC"]],
      });
      return res.json(types);
    } catch (e) {
      next(this.internal(e?.message));
    }
  }

  async createCategory(...args: IControllerContext) {
    return await this.createType(...args, {
      categoryTitle: "Создана категория с именем",
      model: models.TypeCategories,
    });
  }

  async createTypeLight(...args: IControllerContext) {
    return await this.createType(...args, {
      categoryTitle: "Создан тип освещение c именем",
      model: models.TypeLighting,
    });
  }

  async createTypeColorTemp(...args: IControllerContext) {
    return await this.createType(...args, {
      categoryTitle: "Созда тип цветового освещение с именем",
      model: models.TypeColorTemperature,
    });
  }

  async createTypeMaterial(...args: IControllerContext) {
    return await this.createType(...args, {
      categoryTitle: "Созда тип материала с именем",
      model: models.TypeMaterial,
    });
  }

  async createColorFrame(...args: IControllerContext) {
    return await this.createType(...args, {
      categoryTitle: "Создан тип рамы с именем",
      model: models.ColorFrame,
    });
  }

  async updateTypeCategory(...args: IControllerContext) {
    return await this.updateType(...args, {
      categoryTitle: "Обновлена категория",
      model: models.TypeCategories,
    });
  }

  async updateTypeLight(...args: IControllerContext) {
    return await this.updateType(...args, {
      categoryTitle: "Обновлен тип освещение",
      model: models.TypeLighting,
    });
  }

  async updateTypeColorTemp(...args: IControllerContext) {
    return await this.updateType(...args, {
      categoryTitle: "Обновлен тип цветового освещение с именем",
      model: models.TypeColorTemperature,
    });
  }

  async updateTypeMaterial(...args: IControllerContext) {
    return await this.updateType(...args, {
      categoryTitle: "Обновлен тип материала",
      model: models.TypeMaterial,
    });
  }

  async updateColorFrame(...args: IControllerContext) {
    return await this.updateType(...args, {
      categoryTitle: "Обновлен цвет рамы",
      model: models.ColorFrame,
    });
  }

  async deleteTypeCategory(...args: IControllerContext) {
    return await this.deleteType(...args, {
      categoryTitle: "Удалена категория",
      model: models.TypeCategories,
    });
  }

  async deleteTypeLight(...args: IControllerContext) {
    return await this.deleteType(...args, {
      categoryTitle: "Удален тип освещение",
      model: models.TypeLighting,
    });
  }

  async deleteTypeColorTemp(...args: IControllerContext) {
    return await this.deleteType(...args, {
      categoryTitle: "Удален тип цветового освещение",
      model: models.TypeColorTemperature,
    });
  }

  async deleteTypeMaterial(...args: IControllerContext) {
    return await this.deleteType(...args, {
      categoryTitle: "Удален тип материала",
      model: models.TypeMaterial,
    });
  }

  async deleteColorFrame(...args: IControllerContext) {
    return await this.deleteType(...args, {
      categoryTitle: "Удален цвет рамы",
      model: models.ColorFrame,
    });
  }

  async getCategory(...args: IControllerContext) {
    return await this.getType(...args, {
      model: models.TypeCategories,
    });
  }

  async getTypeLight(...args: IControllerContext) {
    return await this.getType(...args, {
      model: models.TypeLighting,
    });
  }

  async getTypeColorTemp(...args: IControllerContext) {
    return await this.getType(...args, {
      model: models.TypeColorTemperature,
    });
  }

  async getTypeMaterial(...args: IControllerContext) {
    return await this.getType(...args, {
      model: models.TypeMaterial,
    });
  }

  async getColorFrame(...args: IControllerContext) {
    return await this.getType(...args, {
      model: models.ColorFrame,
    });
  }
}

export default Types;
