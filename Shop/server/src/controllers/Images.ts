/* eslint-disable @typescript-eslint/no-unused-vars */
import { Service } from "@/libs/modules/Service";
import { deleteFiles, getArrayImages } from "@/libs/utils";
import {
  IClassBasicMethod,
  IClassImagesConstructor,
  IControllersOptions,
  TModelImages,
} from "@/types/controllers";

class Works extends Service implements IClassBasicMethod {
  private readonly router: string;
  private readonly type: string;
  private readonly model: TModelImages;
  private readonly pathFolder: string;

  constructor({ router, type, model, pathFolder }: IClassImagesConstructor) {
    super();
    this.router = router;
    this.type = type;
    this.model = model;
    this.pathFolder = pathFolder;
  }

  async getAll(...args: IControllersOptions) {
    const [req, res, next] = args;
    try {
      const result = (await this.model.findAll()).map(({ img, id, sort }) => ({
        id,
        img,
        sort,
      }));

      return res.json({ result });
    } catch (e) {
      next(this.internal(e.message));
    }
  }

  async create(...args: IControllersOptions) {
    const [req, res, next] = args;
    try {
      const { sort } = req.body;
      const images = getArrayImages(req.files);
      const lastEntry = await this.model.findAndCountAll();

      for (let i = 0; i < images.length; i++) {
        await this.model.create({
          img: images[i],
          sort: sort ? sort : lastEntry.count + i + 1,
        });
      }

      return res.json({
        message: `${this.type} добавлены`,
      });
    } catch (e) {
      next(this.forbidden(e.message));
    }
  }

  async update(...args: IControllersOptions) {
    const [req, res, next] = args;
    try {
      const { id, sort } = req.body;
      const enty = await this.getEntry(id);
      if (!enty) throw new Error("Не найдена запись")

      await this.model.update(
        {
          img: getArrayImages(req.files)?.[0],
          sort,
        },
        {
          where: { id },
        }
      );
      await deleteFiles({
        files: [enty.img],
        filesPath: this.pathFolder,
        router: this.router,
      });

      return res.json({
        message: `${this.type} ${id} обновлена`,
      });
    } catch (e) {
      next(this.forbidden(e.message));
    }
  }

  async delete(...args: IControllersOptions) {
    const [req, res, next] = args;
    try {
      const { id } = req.params;
      const enty = await this.getEntry(id);
      if (!enty) throw new Error("Не найдена запись")

      await this.model.destroy({ where: { id: enty.id } });
      await deleteFiles({
        files: [enty.img],
        filesPath: this.pathFolder,
        router: this.router,
      });

      return res.json({
        message: `${this.type} ${id} удалена`,
      });
    } catch (e) {
      next(this.forbidden(e.message));
    }
  }

  async getEntry(id: string) {
    const entry = await this.model.findOne({ where: { id: `${id}` } });
    return entry
  }
}

export default Works;
