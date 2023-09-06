import { Request, Response } from "express";
import { Category } from "../entities";
import {
  createCategoryService,
  readCategoryRealEstateService,
  readCategoryService,
} from "../services/categories.services";
import { category } from "../interfaces/categories.interfaces";

const createCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const category: category = await createCategoryService(req.body);

  return res.status(201).json(category);
};

const readCategory = async (req: Request, res: Response): Promise<Response> => {
  const categories: Category[] = await readCategoryService();

  return res.status(200).json(categories);
};

const readCategoryRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories: category | null = await readCategoryRealEstateService(
    Number(req.params.id)
  );

  return res.status(200).json(categories);
};
export { createCategory, readCategory, readCategoryRealEstate };
