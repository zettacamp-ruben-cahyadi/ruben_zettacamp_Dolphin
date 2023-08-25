/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, 
and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).
*/

function hasUniqueCharacters(str){

    if (str !== str.toLowerCase()) {
        return false;
    }

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}

console.log(hasUniqueCharacters('abcdefg'))
console.log(hasUniqueCharacters('hello'))