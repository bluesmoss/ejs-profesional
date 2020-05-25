//Arrays
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];

let peopleAndNumbers : Array <string | number> = [];
peopleAndNumbers.push('Blue');
peopleAndNumbers.push(3);

// Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
}

let colotFavorito : Color = Color.Rojo;


//Any

let comodin: any = "Joker";
comodin = {type : 'Wildcard'};

//object
let someObject :  object = {type: 'WildCard'}


//functions
function add(a: number, b:number): number {
  return a + b;
}

const sum = add(4, 6);

function createAdder(a: number): (number) => number {
  return function (b:number) {
    return b + a;
  }
}

const addFour =  createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName:string, lastName:string = 'Smith'): string {
  return `${firstName} ${lastName}`;
}

const richard = fullName('Alfred');


//interface
interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  // color: Color.Rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());
