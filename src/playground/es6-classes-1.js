class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }

};

class Student extends Person {
  constructor(name = 'Anonymous', age = 0, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if(this.hasMajor) {
      description += ` Their college major is ${this.major}.`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name = 'Anonymous', age = 0, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if(this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler('Barrett Jones', 31, 'Austin');
console.log(me.getGreeting());

const anon = new Traveler();
console.log(anon.getGreeting());
