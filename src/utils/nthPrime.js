function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export function findNthPrime(n) {
  console.log("are you rendaring")
  let count = 0;
  let num = 1;

  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++;
    }
  }

  return num;
}
