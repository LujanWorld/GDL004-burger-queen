// Exercise 1
const animals = [
  {
    id: 1,
    kind: "terrestrial",
    name: "lion",
  },
  {
    id: 2,
    kind: "maritime",
    name: "dolphin",
  },
  {
    id: 3,
    kind: "flying",
    name: "eagle",
  },
  {
    id: 4,
    kind: "maritime",
    name: "fish",
  },
  {
    id: 5,
    kind: "terrestrial",
    name: "cat",
  },
  {
    id: 6,
    kind: "flying",
    name: "bat",
  },
];

function findAnimal(animals, id) {
  return animals.find((animal) => animal.id === id);
}
const myBat = findAnimal(animals, 6);
console.log(myBat);
// {
//   id: 6,
//   kind: 'flying',
//   name: 'bat'
// }

// Exercise 1

// Exercise 2
let numbers = [10, 11, 12, 13, 14];
let sum = (a, b) => a + b;
console.log(numbers.reduce(sum));

// Excercise 3

// class Animal (gato)=>[{
//     caminar
// }]

// git new branch

// POO // OOP
// Programacion orientada a objectos / Object Oriented Programming
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    return `${this.name} is eating`;
  }

  sleep() {
    return `${this.name} is sleeping`;
  }
}

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  render() {
    return <div></div>;
  }
}
