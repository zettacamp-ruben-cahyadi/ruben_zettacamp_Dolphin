/**
 *
 * Write a function max_of_two(a, b) that takes in two integers, a and b, 
 * and returns the maximum of the two numbers without using any arrays or built-in functions like max().
 * 
 */

function max_of_two(a, b) {
    if (a > b) {
      return a
    } else if(a < b) {
      return b
    } else {
      return 'values is equals'
    }
  }

function max_of_two_ternary(a, b) {
let c = a > b? a : b (b == a ? 'equals' : b) // edited after EOD
return c
}
  
console.log('- Using if-else statement -')
console.log(max_of_two(10, 5))  
console.log(max_of_two(45, 66)) 
console.log(max_of_two(50, 50))
console.log('\n')

console.log('- Using ternary operator -')
console.log(max_of_two_ternary(10,5))
console.log(max_of_two_ternary(45,66))
console.log(max_of_two_ternary(50,50))