const isPrime = (number) => {
    for (let i = 2, root = Math.sqrt(number); i <= root; i++)
        if (number % i === 0) return false;
    return number > 1;
};

const searchPrime = (n) => {
    let arr_prime = [];
    for (let x = 0;; x++) {
        if (isPrime(x)) arr_prime.push(x);
        if (arr_prime.length == n) break;
    }
    return arr_prime;
};

console.log(searchPrime(20));