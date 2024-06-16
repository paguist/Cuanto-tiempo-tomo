// Reescribir IsPrime
Number.prototype.isPrime = function() {
    if (this <= 1) return false;  // 0 y 1 no son primos
    if (this <= 3) return true;   // 2 y 3 son primos

    if (this % 2 === 0 || this % 3 === 0) return false;  // múltiplos de 2 y 3 no son primos

    let i = 5;
    while (i * i <= this) {
        if (this % i === 0 || this % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
};

const { performance } = require('perf_hooks');

// Calcular números primos 100,000 y 1,000,000-----------------------------------------------------------

let startPrimes = performance.now();
let primeCount = 0;
let num = 2;
while (primeCount < 100000) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`El número primo 100,000 es ${num-1}`);
console.log(`Esto tomó ${performance.now() - startPrimes} milisegundos`);

startPrimes = performance.now();
primeCount = 0;
num = 2;
while (primeCount < 1000000) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`El número primo 1,000,000 es ${num-1}`);
console.log(`Esto tomó ${performance.now() - startPrimes} milisegundos`);


// Comparar Fibonacci--------------------------------------------------------------------------------
// Recursiva
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}

let startFibonacci = performance.now();
console.log(`Fibonacci recursivo (n=20): ${rFib(20)}`);
console.log(`Esto tomó ${performance.now() - startFibonacci} milisegundos`);

// Iterativa
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}

startFibonacci = performance.now();
console.log(`Fibonacci iterativo (n=20): ${iFib(20)}`);
console.log(`Esto tomó ${performance.now() - startFibonacci} milisegundos`);


// Invertir cadena usando un bucle-------------------------------------------------------------

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
let reversedStory = '';

for (let i = story.length - 1; i >= 0; i--) {
    reversedStory += story[i];
}

console.log(reversedStory);
