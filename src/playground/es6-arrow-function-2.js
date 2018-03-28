const add = function(a, b) {
  return a + b;
};
console.log(add(55, 1));

const addArrow = (a, b) => a + b;
console.log(addArrow(20, 1));

const user = {
  name: 'Andrew',
  cities: ['Wichita Falls', 'Austin'],
  printPlacesLived() {
    const cityMessages = this.cities.map((city) => {
      console.log(city);
    });
  }
};
user.printPlacesLived();

for(let key in user) {
  console.log(key, user[key]);
}

const multiplier = {
  numbers: [1,2,3],
  multiplyBy: 2,
  multiply() {
    this.numbers.map((number) => console.log(number * this.multiplyBy));
  }
};
multiplier.multiply();
