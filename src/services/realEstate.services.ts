import { RealEstate } from "../entities";
import {
  addressesRepository,
  categoriesRepository,
  real_estateRepository,
} from "../repositories";
import { createRealEstate } from "../interfaces/realEstate.interfaces";

const createRealEstateService = async (
  data: createRealEstate
): Promise<RealEstate> => {
  const { address, categoryId, ...rest } = data;

  const createAdress = addressesRepository.create(address);

  const saveAdress = await addressesRepository.save(createAdress);

  const category = await categoriesRepository.findOne({
    where: { id: Number(categoryId) },
  });

  const realEstate = real_estateRepository.create({
    ...rest,
    address: saveAdress,
    category: category!,
  });

  const saveRealEsate = await real_estateRepository.save(realEstate);

  return saveRealEsate;
};

const readRealEstateService = async (): Promise<RealEstate[]> => {
  const readRealEState: RealEstate[] = await real_estateRepository.find({
    relations: { address: true },
  });

  return readRealEState;
};

export { readRealEstateService, createRealEstateService };
