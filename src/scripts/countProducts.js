import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const countProducts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const parsedData = JSON.parse(data);
  return parsedData.length;
};
console.log(await countProducts());