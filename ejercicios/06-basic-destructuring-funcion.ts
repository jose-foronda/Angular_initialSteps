/**
 * TypeScript code
 * 22. Desestructuración de argumentos
 */

interface Product {
  description: string;
  price: number;
}

const telephone: Product = {
  description: 'Nokia A1',
  price: 200,
};

const tablet: Product = {
  description: 'Aipad Air',
  price: 400,
};

/**Method 1 */
function computeTaxes1(productos: Product[]): [number, number] {
  let total = 0;

  productos.forEach((product: Product, index: number, productos: Product[]) => {
    total += product.price;
  });

  return [total, total * 0.15];
}

/**Method 2 */
function computeTaxes2(productos: Product[]): [number, number] {
  let total = 0;

  productos.forEach(({ price }) => {
    total += price;
  });

  return [total, total * 0.15];
}

const bougthProducts: Product[] = [telephone, tablet];
const [totalBase, computedTaxes] = computeTaxes2(bougthProducts);

console.log('total ' + totalBase);
console.log('computedTaxes ' + computedTaxes);
