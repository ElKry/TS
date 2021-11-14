function sum(a, b) {
    return a + b;
}
function position(a, b) {
    if (!a && !b)
        return {
            x: undefined,
            y: undefined
        };
    if (a && !b)
        return {
            x: a,
            y: undefined,
            "default": a.toString()
        };
    if (a && b)
        return {
            x: a,
            y: b
        };
}
console.log(position());
console.log(position(42));
console.log(position(42, 24));
