import { createFakeProduct } from '../utils/createFakeProduct.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const generateProducts = async (number) => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const parsedData = JSON.parse(data);

  for (let i = 0; i < number; i += 1) {
    parsedData.push(createFakeProduct());
  }

  await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), 'utf-8');
};

generateProducts(3);
