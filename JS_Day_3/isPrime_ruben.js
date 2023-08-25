/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {

  // condition 1 decimal
  if (n % 1 !== 0){
    return false
  }

  // condition 2
  if (n <= 1) {
    return false; 
  }

  // condition 3
  if (n <= 3) {
    return true 
  }

  // condition 4
  if (n % 2 === 0 || n % 3 === 0 ) {
    return false
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        return false  // prime number should not have more than 2 factors
    }
  }
    
    return true; 
}

  for (let i = 0; i <= 1000; i++) {
    console.log((i),isPrime(i));
  }
  
// console.log(isPrime(3)); 
// console.log(isPrime(43)); 
