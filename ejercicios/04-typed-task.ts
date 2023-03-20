/**
 * TypeScript code
 */

interface Address {
  street: string;
  country: string;
  city: string;
}

interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string;
}

const superHero: SuperHero = {
  name: 'SpiderMan',
  age: 30,
  address: {
    street: 'Queens',
    country: 'USA',
    city: 'NY',
  },
  showAddress() {
    return this.name + ', ' + this.address.city + ', ' + this.address.country;
  },
};

const address = superHero.showAddress();
console.log(address);
