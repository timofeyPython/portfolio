/* eslint-disable @typescript-eslint/no-explicit-any */
import { models } from "@/libs/database/models";
import { Service } from "@/libs/modules/Service";
import {
  checkParamBody,
  deleteFiles,
  getArrayImages,
  parseArray,
} from "@/libs/utils";
import { IControllersOptions } from "@/types/controllers";
import {
  DtoProductCreate,
  DtoProductDelete,
  DtoProductUpdate,
} from "./dto/product";
import { folderImagesProducts } from "@/libs/utils/constants";
import { Op } from "sequelize";

class Products extends Service {
  private readonly router: string;
  constructor() {
    super();
    this.router = "products";
  }

  @checkParamBody(DtoProductCreate)
  async create(...args: IControllersOptions) {
    const [req, res, next] = args;
    try {
      const {
        name,
        price,
        location_lighting,
        depth_mirror,
        general_depth_production,
        width_frame,
        type_fixation,
        number_light,
        description,
        typeCategoryId,
        typeLightingId,
        typeColorTemperatureId,
        typeMaterialId,
        colorFrameId,
        width,
        height,
      } = req.body;

      const entry = await models.Product.create({
        name,
        price,
        location_lighting,
        depth_mirror,
        general_depth_production,
        width_frame,
        type_fixation,
        number_light,
        description,
        images: {
          result: getArrayImages(req.files),
        },
        typeCategoryId,
        typeLightingId,
        typeColorTemperatureId,
        typeMaterialId,
        colorFrameId,
        width,
        height,
      });

      return res.json({
        message: `Позиция ${name} добавлена`,
        entry,
      });
    } catch (e) {
      next(this.forbidden(e.message));
    }
  }

  @checkParamBody(DtoProductUpdate)
  async update(...args: IControllersOptions) {
    const [req, res, next] = args;
    try {
      const {
        name,
        price,
        location_lighting,
        depth_mirror,
        general_depth_production,
        width_frame,
        type_fixation,
        number_light,
        description,
        typeCategoryId,
        typeLightingId,
        typeColorTemperatureId,
        typeMaterialId,
        colorFrameId,
        id,
        width,
        height,
        deletesIMG,
      } = req.body;

      await models.Product.update(
        {
          name,
          price,
          location_lighting,
          depth_mirror,
          general_depth_production,
          width_frame,
          type_fixation,
          number_light,
          description,
          images: {
            result: getArrayImages(req.files),
          },
          typeCategoryId,
          typeLightingId,
          typeColorTemperatureId,
          typeMaterialId,
          colorFrameId,
          width,
          height,
        },
        { where: { id } }
      );

      await deleteFiles({
        files: JSON.parse(deletesIMG),
        filesPath: folderImagesProducts,
        router: this.router,
      });

      return res.json({
        message: "Позиция обновлена",
      });
    } catch (e) {
      next(this.forbidden(e.message));
    }
  }

  @checkParamBody(DtoProductDelete)
  async delete(...args: IControllersOptions) {
    const [req, res, next] = args;
    try {
      const { id } = req.body;
      const entry = await models.Product.findOne({ where: { id } });

      if (!entry) next(this.badRequest("Данная запись отсутсвует!"));

      await entry.destroy();
      await deleteFiles({
        files: entry.images.result,
        filesPath: folderImagesProducts,
        router: this.router,
      });

      return res.json({
        message: `Запись #${id} удалена`,
      });
    } catch (e) {
      next(this.forbidden(e.message));
    }
  }

  async getAll(...args: IControllersOptions) {
    const [req, res, next] = args;
    try {
      const { price, categoryId, lightId, colorTempId, materialId } = req.query;
      const page = +req?.query?.page || 1;
      const limit = +req?.query.limit || 8;
      const offset = page * limit - limit;
      const currentPrice = parseArray(price, [0, 1111111]);
      const options: any = {
        where: { price: { [Op.between]: [currentPrice[0], currentPrice[1]] } },
        offset,
        limit,
        include: [
          { model: models.TypeCategories, required: false },
          { model: models.TypeLighting, required: false },
          { model: models.TypeColorTemperature, required: false },
          { model: models.TypeMaterial, required: false },
          { model: models.ColorFrame, required: false },
        ],
        order: [["id", "DESC"]],
      };

      if (categoryId) options.where.typeCategoryId = parseArray(categoryId);
      if (lightId) options.where.typeLightingId = parseArray(lightId);
      if (colorTempId)
        options.where.typeColorTemperatureId = parseArray(colorTempId);
      if (materialId) options.where.typeMaterialId = parseArray(materialId);

      const entries = await models.Product.findAndCountAll(options);

      return res.json({
        entries: entries.rows.map((entry) => this.getProduct(entry)),
        count: entries.count,
      });
    } catch (e) {
      return next(
        this.internal(`Ошибка при получении данных, подроности: ${e?.message}`)
      );
    }
  }

  async getOne(...args: IControllersOptions) {
    const [req, res, next] = args;
    try {
      const { id } = req.params;
      const entry = await models.Product.findOne({
        where: { id },
        include: [
          { model: models.TypeCategories, required: false },
          { model: models.TypeLighting, required: false },
          { model: models.TypeColorTemperature, required: false },
          { model: models.TypeMaterial, required: false },
          { model: models.ColorFrame, required: false },
        ],
        order: [["id", "ASC"]],
      });
      return res.json({
        entry: entry && this.getProduct(entry, true),
      });
    } catch (e) {
      return next(
        this.badRequest(`Ошибка в получении данных, ошибка: ${e?.message}`)
      );
    }
  }

  private getProduct(
    {
      id,
      location_lighting,
      depth_mirror,
      general_depth_production,
      width_frame,
      type_fixation,
      number_light,
      description,
      width,
      height,
      images,
      color_frame,
      type_category,
      type_lighting,
      type_color_temperature,
      type_material,
      name,
      price,
    }: any,
    all?: boolean
  ) {
    if (all)
      return {
        id,
        name,
        price,
        locationLighting: location_lighting,
        depthMirror: depth_mirror,
        generalDepthProduction: general_depth_production,
        widthFrame: width_frame,
        typeFixation: type_fixation,
        numberLight: number_light,
        description,
        images,
        width,
        height,
        types: {
          frame: {
            id: color_frame?.id,
            name: color_frame?.name,
          },
          category: {
            id: type_category?.id,
            name: type_category?.name,
          },
          lighting: {
            id: type_lighting?.id,
            name: type_lighting?.name,
          },
          colorTemperature: {
            id: type_color_temperature?.id,
            name: type_color_temperature?.name,
          },
          material: {
            id: type_material?.id,
            name: type_material?.name,
          },
        },
      };
    else
      return {
        id,
        name,
        price,
        images,
      };
  }
}

export default Products;
