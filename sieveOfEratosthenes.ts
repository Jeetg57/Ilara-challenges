function sieveOfEratosthenes(n: number) {
  // Generate a list of numbers from 2 to n
  let numbers = [...Array(n - 1).keys()].map((x) => x + 2);
  // i*i condition reduces number of loops. Square root of n times.
  for (let i = 2; i * i <= n; i++) {
    for (let j = 0; j <= n - 2; j++) {
      // remove the numbers that are divisible by i if number is not i
      if (numbers[j] !== i && numbers[j] % i == 0) {
        numbers.splice(j, 1);
      }
    }
  }
  return numbers;
}
// Run function
const primes = sieveOfEratosthenes(100);
console.log(primes);
