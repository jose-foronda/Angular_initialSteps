/** funciones */

function suma(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

const resultado = suma(10, 20);

console.log(resultado);

// multiplicar

function multiplicar(numero: number, otroNumero?: number, base: number = 2) {
  return numero * base;
}

console.log(multiplicar(5, 3));
