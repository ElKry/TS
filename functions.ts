function sum(a: number, b: number): number {
  return a + b;
}

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionDefault extends MyPosition {
  default: string
}

function position(): MyPosition;
function position(a: number): MyPositionDefault
function position(a: number, b: number): MyPosition

function position(a?:number, b?:number) {
  if (!a && !b) 
    return {
      x: undefined,
      y: undefined
    }

  if (a && !b) 
    return {
      x: a,
      y: undefined,
      default: a.toString()
    }

  if (a && b) 
    return {
      x: a,
      y: b
    }
}

console.log(position());
console.log(position(42));
console.log(position(42, 24))