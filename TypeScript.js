// let num: any = 10;
// let num2 = ''
// num = '200'
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('Hello World!');
console.log(greeter.greet());
