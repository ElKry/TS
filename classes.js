var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return name + ": " + this.version;
    };
    return Typescript;
}());
/* class Car {
  readonly model: string
  readonly weels: number = 4;

  constructor(theModel: string) {
    this.model = theModel
  }
} */
// Класс выше можно переписать на
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.weels = 4;
    }
    return Car;
}());
//================ Модификаторы свойст и методов
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = ''; // свойство доступно внутри класса и его потомков
        this.color = 'black'; // к свойству можно обращаться из классов потомков
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice('meow'); // будет работать так как метод публичный
cat.color = 'red';
//============ абстрактные классы и методы
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('render');
    };
    AppComponent.prototype.info = function () {
        return 'info';
    };
    return AppComponent;
}(Component));
