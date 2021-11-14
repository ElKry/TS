// Операторы keyof Exclude Pick
interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // получит перечисление name age

let key1: PersonKeys = 'name'
// let key2: PersonKeys = 'aaaa' не сработает такого типа нет в перечислении

//============== сделаем из типа новый подтип который получит новое перечисление
type User = {
  id: number
  name: string
  phone: number
}

type userKeys = Exclude<keyof User, 'id'> // указываем какие поля исключить оставляем только ключи
type userKeys1 = Pick<User, 'name' | 'phone'> // указываем какие поля забрать и получаем объект снужными полями

let userInfo: userKeys = 'name'
let user2: userKeys1 = {
  name: '123',
  phone: 1223
}