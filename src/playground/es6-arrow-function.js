// const square = function(x) {
//   return x * x;
// };
//
// const squareArrow = (x) => {
//   return x * x;
// }
//
// console.log(square(8));
// console.log(squareArrow(5));

const name = 'Barrett Jones';
const getFirstName = (name) => name.split(' ')[0];
const firstName = getFirstName(name);
console.log('firstName', firstName);
