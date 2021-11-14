// Описание интерфейса для прямоугольника
interface Rect {
  readonly id: string // только для чтения
  color?: string // необязательный параметр
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: "123",
  size: {
    width: 3,
    height: 4,
  },
  color: 'black'
}

rect1.color = "white"; // нельзя переопределять сам объект но свойсва можно
// rect1.id = '321' ошибка так как id свойство только для чтения readonly

// пустые объекты определенных типов можно записать
const rect3 = {} as Rect;
const rect4 = <Rect>{} // устаревшее

//=======================
// Наследование интерфейсов
 interface RectWithArea extends Rect {
  getArea: () => number
 }

 const rect5: RectWithArea = {
   id: '321',
   size: {
     width: 20,
     height: 20
   },
   getArea(): number {
     return this.size.width * this.size.height;
   }
 }

 // Классы имплиментация от интерфейса
 interface IClock {
   time: Date
   setTime(date: Date): void
 }

 class Clock implements IClock {
   time =  new Date()
   setTime(date: Date): void {
    this.time = date
   }
 }

 // интерфейс для объекта с неизвестным количеством свойств
 interface Style {
   [key: string]: string
 }

 const style: Style = {
   border: '1px',
   borderRadius: '3px',
 }