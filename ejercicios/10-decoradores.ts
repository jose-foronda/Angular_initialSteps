/**
 * 28. Decoradores de clases
 */
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    reportingURL = 'http://www...';
  };
}

@reportableClassDecorator
class MiSuperclase {
  public propiedad: string = 'ABC123';

  imprimir() {
    console.log('Hola mundo');
  }
}

console.log(MiSuperclase);

const miClase: MiSuperclase = new MiSuperclase();
console.log(miClase);
