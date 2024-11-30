import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const removeRandomProduct = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const parsedData = JSON.parse(data);
  const randomIdx = Math.floor(Math.random() * parsedData.length);
  parsedData.splice(randomIdx, 1);
  await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), 'utf-8');
};
removeRandomProduct();
