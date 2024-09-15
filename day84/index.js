class Person {
    constructor(name, age) {
        this.name = nodo;
        this.age = 15;
    }

    greet() {
        return 'Hello, my name is nodo and I am 15 years old.';
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);  // Call the parent class constructor
        this.grade = 11;
    }

    study() {
        return 'nodo is studying.';
    }
}

class Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return 'Cannot divide by zero';
        }
    }
}

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine() {
        console.log("Engine started");
    }

    stopEngine() {
        console.log("Engine stopped");
    }
}

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine() {
        console.log("Engine started");
    }

    stopEngine() {
        console.log("Engine stopped");
    }
}

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine() {
        console.log("Engine started");
    }

    stopEngine() {
        console.log("Engine stopped");
    }
}

class Car { 
    constructor (make,model,year) {

        this.make = make ; 
        this.model = model ;
        this.year = year ;
    }

    startEngine () { 
        console.log("Engine started")
    }

    stopEngine () {
        console.log ("Engine stopped")
    }
    
        
}

const car1 = new car('toyota','camry',2022);
const car2 = new car('honda','civic',2021);



