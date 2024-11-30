import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

export const addOneProduct = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const parseData = JSON.parse(data);
  parseData.push(createFakeProduct());
  await fs.writeFile(PATH_DB, JSON.stringify(parseData, null, 2), 'utf-8');
};
addOneProduct();
