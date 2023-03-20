/**
 * 23. Importaciones y exportaciones
 */

import { Product, computeTaxes2 } from './06-basic-destructuring-funcion';

const shoppingCart: Product[] = [
  {
    description: 'Telefono 1',
    price: 200,
  },
  {
    description: 'Telefono 2',
    price: 200,
  },
];

const [totalBase, computedTaxes] = computeTaxes2(shoppingCart);

console.log('total ' + totalBase);
console.log('computedTaxes ' + computedTaxes);
