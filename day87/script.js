//N=1
const uniqueNumbers = new Set();
const numbers = [1, 2, 2, 3, 4, 5, 1, 6];

numbers.forEach(number => {
    if (!uniqueNumbers.has(number)) {
        uniqueNumbers.add(number);
    }
});

console.log(uniqueNumbers); 

//N=2
const myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'Tbilisi');

console.log(myMap);

//N=3
const myMaP = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'Tbilisi');

myMap.delete('age');  

console.log(myMap);  


//N=4
const mySet = new Set([1, 2, 3, 4]);

mySet.clear();  

console.log(mySet); 

//N=5
class CollectionManager {
    constructor() {
        this.myMap = new Map();
        this.mySet = new Set();
    }

    // Map-ის მმართველობა
    addToMap(key, value) {
        this.myMap.set(key, value);
    }

    removeFromMap(key) {
        if (this.myMap.has(key)) {
            this.myMap.delete(key);
        } else {
            console.log(Key "${key}" does not exist in the Map.);
        }
    }

    showMap() {
        this.myMap.forEach((value, key) => {
            console.log(Key: ${key}, Value: ${value});
        });
    }

    // Set-ის მმართველობა
    addToSet(item) {
        this.mySet.add(item);
    }

    clearSet() {
        this.mySet.clear();
    }

    showSet() {
        this.mySet.forEach(item => {
            console.log(Set item: {item});
        });
    }
}

// გამოყენება:
const manager = new CollectionManager();

// Map-ის მმართველობა
manager.addToMap('name', 'Alice');
manager.addToMap('age', 25);
manager.showMap();
manager.removeFromMap('age');
manager.showMap();

// Set-ის მმართველობა
manager.addToSet(1);
manager.addToSet(2);
manager.addToSet(3);
manager.showSet();
manager.clearSet();
manager.showSet();