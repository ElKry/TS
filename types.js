var isFetching = true;
var isLoading = false;
var int = 42;
var flost = 4.2;
var num = 3e10;
var message = "Hello TS";
var numberArray = [1, 2, 3, 4];
var numberArr2 = [1, 2, 3, 4]; // дженерик
var words = ["one", "two"];
// Tuple
var contact = ["Name", 89009999999];
// Any для изменяемых переменных
var variable = 42;
variable = 'string';
// TS в функциях
function logName(name) {
    console.log(name);
}
logName('Вася');
