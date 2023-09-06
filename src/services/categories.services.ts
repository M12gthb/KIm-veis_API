import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { category, categoryCreate } from "../interfaces/categories.interfaces";
import { categoriesRepository } from "../repositories";
import { Repository } from "typeorm";

const createCategoryService = async (
  data: categoryCreate
): Promise<category> => {
  const category: category = categoriesRepository.create(data);

  await categoriesRepository.save(category);

  return category;
};

const readCategoryService = async (): Promise<Category[]> => {
  const categories: Repository<Category> =
    AppDataSource.getRepository(Category);

  const readCategory = await categories.find();

  return readCategory;
};

const readCategoryRealEstateService = async (
  id: number
): Promise<category | null> => {
  const categories: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categoryRealEstate = await categories.findOne({
    where: { id: id },
    relations: { realEstate: true },
  });

  return categoryRealEstate;
};

export {
  createCategoryService,
  readCategoryService,
  readCategoryRealEstateService,
};
