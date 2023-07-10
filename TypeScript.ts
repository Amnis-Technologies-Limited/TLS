
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message
    }

    greet(): string {
        return this.greeting;
    }
}

let greeters = new Greeter('Hello World!')
console.log(greeters.greet())