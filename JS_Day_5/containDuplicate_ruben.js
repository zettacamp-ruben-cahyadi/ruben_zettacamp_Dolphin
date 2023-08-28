/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * 
 * @param {number[]} nums - The input array of integers
 * @return {boolean} Returns true if the array contains any duplicate value, false otherwise
 */

function containsDuplicate(nums){

    for (let i = 0; i < nums.length; i++) {
        if ( typeof nums[i] === 'string') {
            console.log(nums)
            return false
        }
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                console.log(nums)
                return true
            }
        }
    }
    console.log(nums)
    return false
}


console.log(containsDuplicate([1, 50, 3, 100])); // Output: true
console.log(containsDuplicate([1, 400, 300, 400])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true








