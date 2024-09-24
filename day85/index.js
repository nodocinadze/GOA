
function uniqueNumbers(arr) {
    const uniqueSet = new Set();
    arr.forEach((num) => {
        if (!uniqueSet.has(num)) {
            uniqueSet.add(num);
        }
    });
    return uniqueSet;
}


const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueNumbers(numbers)); 
const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
map.set('job', 'Engineer');

console.log(map); 


const anotherMap = new Map();
anotherMap.set('color', 'blue');
anotherMap.set('size', 'medium');
anotherMap.set('shape', 'circle');


anotherMap.delete('size');
console.log(anotherMap); 



const set = new Set([1, 2, 3, 4, 5]);
console.log(set); 

set.clear(); 
console.log(set);



class CollectionManager {
    constructor() {
        this.map = new Map();
        this.set = new Set();
    }

   
    addToMap(key, value) {
        this.map.set(key, value);
    }

    removeFromMap(key) {
        if (this.map.has(key)) {
            this.map.delete(key);
        } else {
            console.log(Key "${key}" does not exist in the map.);
        }
    }

    showMap() {
        console.log("Map entries:");
        this.map.forEach((value, key) => {
            console.log(${key}: ${value});
        });
    }

    
    addToSet(item) {
        this.set.add(item);
    }

    clearSet() {
        this.set.clear();
    }

    showSet() {
        console.log("Set entries:");
        this.set.forEach((item) => {
            console.log(item);
        });
    }
}


const manager = new CollectionManager();


manager.addToMap('username', 'johnDoe');
manager.addToMap('email', 'john@example.com');
manager.showMap();
manager.removeFromMap('email');
manager.showMap();


manager.addToSet(100);
manager.addToSet(200);
manager.addToSet(300);
manager.showSet();
manager.clearSet();
manager.showSet();