/**
 * 29. Encadenamiento opcional
 */

interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: 'Juan',
};

const pasajero2: Pasajero = {
  nombre: 'Juan',
  hijos: ['Natlia'],
};

function imprimeHijos(pasajero: Pasajero): void {
  const numeroHijos = pasajero.hijos?.length || 0;
  console.log(numeroHijos);
}

imprimeHijos(pasajero1);
