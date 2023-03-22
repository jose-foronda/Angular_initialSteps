/**
 * 24. Clases básicas
 * 25. Constructor de una clase
 * 26. Extender una clase
 */

/**
 * option 1
 */
class Hero {
  public alterEgo: string;
  public edad: number;
  static nombreReal: number;

  constructor(alterEgo: string) {
    this.alterEgo = alterEgo;
  }
}

const hero: Hero = new Hero('IronMan');
console.log(hero.alterEgo);

/**
 * option 2
 */
class Hero2 {
  constructor(
    private alterEgo: string,
    public edad: number,
    private nombreReal: number
  ) {}
}

const hero2: Hero2 = new Hero2('IronMan', 29, 'Tony');
console.log(hero2);

// Extending a class
class PersonaNormal {
  private nombre: string;
  private direccion: string;

  constructor(nombre: string, direccion: string) {
    this.nombre = nombre;
    this.direccion = direccion;
  }
}

class Hero3 extends PersonaNormal {
  public alterEgo: string;
  public edad: number;
  public nombreReal: string;

  constructor(
    alterEgo: string,
    edad: number,
    nombreReal: string,
    nombre: string,
    direccion: string
  ) {
    super(nombre, direccion);
    this.alterEgo = alterEgo;
    this.nombreReal = nombreReal;
    this.edad = edad;
  }
}

const hero3: Hero3 = new Hero3('IronMan', 29, 'Tony', 'stark', 'NY USA');
console.log(hero3);
