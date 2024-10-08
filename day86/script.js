//N=1
function* infiniteNumbers() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const generator = infiniteNumbers();
console.log(generator.next().value);  // 0
console.log(generator.next().value);  // 1
console.log(generator.next().value);  // 2

//N=2
function* evenNumbers() {
    let i = 0;
    while (true) {
        yield i;
        i += 2;
    }
}

const evenGenerator = evenNumbers();
console.log(evenGenerator.next().value);  // 0
console.log(evenGenerator.next().value);  // 2
console.log(evenGenerator.next().value);  // 4

//N=3
function* randomNumbers() {
    while (true) {
        yield Math.random();
    }
}

const randomGen = randomNumbers();
console.log(randomGen.next().value);  // Random number
console.log(randomGen.next().value);  // Another random number

//N=4
function* letterByLetter(word) {
    for (let letter of word) {
        yield letter;
    }
}

const letterGen = letterByLetter("გამარჯობა");
console.log(letterGen.next().value);  // გ
console.log(letterGen.next().value);  // ა
console.log(letterGen.next().value);  // მ

//N=5
function* randomPassword() {
    const digits = '0123456789';
    while (true) {
        let password = '';
        for (let i = 0; i < 8; i++) {
            password += digits[Math.floor(Math.random() * digits.length)];
        }
        yield password;
    }
}

const passwordGen = randomPassword();
console.log(passwordGen.next().value);  // Random 8-digit password

//N=6
function* improvedPassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    while (true) {
        let password = '';
        for (let i = 0; i < 8; i++) {
            password += chars[Math.floor(Math.random() * chars.length)];
        }
        yield password;
    }
}

const improvedPasswordGen = improvedPassword();
console.log(improvedPasswordGen.next().value);  // Random 8-character password with letters, numbers, symbols

