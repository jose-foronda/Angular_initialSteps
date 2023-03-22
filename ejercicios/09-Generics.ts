/**
 * 27. Genéricos
 */

function queTipoSoy<T>(argumento: T): T {
  return argumento;
}

let soyString: string = queTipoSoy<string>('Soy string');
let soyNumero: number = queTipoSoy<number>(100);
