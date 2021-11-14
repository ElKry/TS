const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const flost: number = 4.2;
const num: number = 3e10;

const message: string = "Hello TS";

const numberArray: number[] = [1, 2, 3, 4];
const numberArr2: Array<number> = [1, 2, 3, 4]; // дженерик
const words: string[] = ["one", "two"];

// Tuple
const contact: [string, number] = ["Name", 89009999999];

// Any для изменяемых переменных
let variable: any = 42;
variable = 'string';

// TS в функциях
function logName(name: string): void { // принимает значение string и ничего не возвращает void
  console.log(name)
}
logName('Вася');

// Never
function logError(msg: string): never {// если в функции есть ошибка то тип never
  throw new Error(msg)
}

function infinite(): never { // функция никогда не завершится
  while(true) {

  }
}

// Создание тпов
type Login = string; // Свой тип переменной
const login: Login = '123';

type ID = string | number;
const id1: ID = 123;
const id2: ID = '123';
// не сработает const id3: ID = true 

// типы null undefined
type someType = string | null | undefined;