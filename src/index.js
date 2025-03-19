// Destructuring an object into named variables
const user = {
  id: 1,
  userName: 'Siobhan Thacker',
  authorized: true,
  group: 'admin',
};

const { id, userName, authorized } = user;

console.log(id); // 1
console.log(userName); // Siobhan Thacker
console.log(authorized); // true
console.log('----------------------------');

// Destructuring an object passed as an argument into a function

const isUserAuthorized = function( { id, userName, authorized }) {
  if (authorized) {
    console.log(`${id}: ${userName} is authorized`);
  } else {
    console.log(`${id}: ${userName} is not authorized`);
  }
};

// Makes use of the `user` variable defined above
isUserAuthorized(user); // Siobhan Thacker is authorized.

const unAuthorizedUser = {
  id: 2,
  userName: 'Chantay Jarrell',
  authorized: false,
  group: 'guest',
};

isUserAuthorized(unAuthorizedUser); // Chantay Jarrell is not authorized.

console.log('----------------------------');

// Destructuring an array into named variables

const dogs = ['Fido', 'Buddy', 'Snoopy', 'Sparky'];

const [firstDog, secondDog, ...otherDogs] = dogs;

console.log(firstDog); // Fido
console.log(secondDog); // Buddy
console.log(otherDogs); // [ 'Snoopy', 'Sparky' ]
console.log('----------------------------');

// Using array destructuring to get the first element of an array.

// Comment out all lines in the file that initialize and use the same
// named variables before uncommenting and running the block below

// const dogs = ['Fido', 'Buddy', 'Snoopy', 'Sparky'];

// const [firstDog] = dogs;

// console.log(firstDog); // Fido
console.log('----------------------------');

// Using array destructuring to get all elements
// *except* the first element of an array.

// Comment out all lines in the file that initialize and use the same
// named variables before uncommenting and running the block below

// const dogs = ['Fido', 'Buddy', 'Snoopy', 'Sparky'];

// const [, ...otherDogs] = dogs;

// console.log(otherDogs); // ['Buddy', 'Snoopy', 'Sparky']
console.log('----------------------------');

// Using array destructuring to swap values

let x = 'first';
let y = 'second';

[x, y] = [y, x];

console.log(x); // second
console.log(y); // first
console.log('----------------------------');