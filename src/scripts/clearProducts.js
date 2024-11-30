import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const clearProducts = async () => {
  await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
};
clearProducts();
