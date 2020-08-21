// Class Animal com atributo name e o metodo speak
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} falando.`);
  }
}

//Criar classes Cat e Dog com atributo "type", herdando de Animal.
class Dog extends Animal {
  constructor(name, type) {
    super(name);

    this.type = type;
  }
  speak() {
    console.log(`${this.name} (${this.type}) latindo.`);
  }
}

class Cat extends Animal {
  constructor(name, type) {
    super(name);

    this.type = type;
  }
  speak() {
    console.log(`${this.name} (${this.type}) miando.`);
  }
}

const animal = new Animal('Totô');
const dog = new Dog('Jack', 'Poodle');
const cat = new Cat('Han solo', 'Frajola');
animal.speak();
dog.speak();
cat.speak();
