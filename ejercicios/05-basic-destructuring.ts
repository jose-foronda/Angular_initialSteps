/**
 * TypeScript code
 * 20. Desestructuración de Objetos
 */

interface Player {
  volume: number;
  second: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const player: Player = {
  volume: 30,
  second: 35,
  song: 'My Life',
  details: {
    author: 'Ed Shed',
    year: 2015,
  },
};

//

/**
 * Long approach
 */
console.log('****  Long approach ****');
console.log('volume is ' + player.volume);
console.log('second is ' + player.second);
console.log('song is ' + player.song);
console.log('author is ' + player.details.author);
console.log('year is ' + player.details.year);

/**
 * Short approach
 */
const { volume, second, song, details } = player;
const { author, year } = details;

console.log('');
console.log('****  Short approach ****');
console.log('volume is ' + volume);
console.log('second is ' + second);
console.log('song is ' + song);
console.log('author is ' + author);
console.log('year is ' + year);

/**
 * Alternative Details extraction apporach
 */
/*const { volume, second, song, details: {author, year} } = player;
 
 console.log('');
 console.log('****  Short approach ****');
 console.log('volume is ' + volume);
 console.log('second is ' + second);
 console.log('song is ' + song);
 console.log('author is ' + author);
 console.log('year is ' + year);*/

/**
 * Aliasing attribute names apporach
 */
/* const { volume: theVolume, second, song, details: {author: theAuthor, year: theYear} } = player;
 
  console.log('');
  console.log('****  Short approach ****');
  console.log('volume is ' + theVolume);
  console.log('second is ' + second);
  console.log('song is ' + song);
  console.log('author is ' + theAuthor);
  console.log('year is ' + theYear);*/

/**
 * 21. Desestructuración de Arreglos
 */

console.log('');
console.log('21. Desestructuración de Arreglos');

const dragonBallCharacters: string[] = ['Goku', 'Gohan', 'Vegeta'];

/* Old approach*/
console.log('**** Old apporach ****');
console.log('character 0 ' + dragonBallCharacters[0]);
console.log('character 1 ' + dragonBallCharacters[1]);
console.log('character 2 ' + dragonBallCharacters[2]);

/* Better approach */
console.log('**** Better apporach ****');
const [character0, character1, character2] = dragonBallCharacters;
console.log('character 0 ' + character0);
console.log('character 1 ' + character1);
console.log('character 2 ' + character2);
