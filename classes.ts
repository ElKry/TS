class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `${name}: ${this.version}`
  }
}

/* class Car { 
  readonly model: string
  readonly weels: number = 4;

  constructor(theModel: string) {
    this.model = theModel
  }
} */

// Класс выше можно переписать на
class Car { 
  readonly weels: number = 4;
  constructor(readonly model: string) {}
}

//================ Модификаторы свойст и методов
class Animal {
  protected voice: string = '' // свойство доступно внутри класса и его потомков
  public color: string = 'black' // к свойству можно обращаться из классов потомков

  private go(): void { // доступно только внутри класса
    console.log('Go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat();
cat.setVoice('meow'); // будет работать так как метод публичный
cat.color = 'red';

//============ абстрактные классы и методы

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render() {
    console.log('render');
  }

  info() {
    return 'info'
  }
}