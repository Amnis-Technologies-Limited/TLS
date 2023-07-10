function Cat(name) {
    this.name = name;
    this.sound = 'Meow';
}

let newCat = new Cat('Tom Tom');
console.log(newCat.name)
console.log(newCat.sound)

function Dog(name) {
    this.oruko = name
    let sound = 'Bark'
}

let dogger = new Dog('Bingo')
console.log(dogger.oruko)