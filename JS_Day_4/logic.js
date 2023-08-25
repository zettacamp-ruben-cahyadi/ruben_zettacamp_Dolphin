/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, 
and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).
*/

function hasUniqueCharacters(str) {
    
    const visitedLetters = []

    if (str !== str.toLowerCase()) {
      return false;
  }

    for (let i = 0; i < str.length; i++) {
      const letter = str[i]
  
      if (visitedLetters.includes(letter)) {
        return false;
      }
  
      //push to array
      visitedLetters.push(letter)
    }
    return true
  }

 
  console.log(hasUniqueCharacters("abcdefg"))
  console.log(hasUniqueCharacters("helo"))  
  console.log(hasUniqueCharacters("Ruben"))  
  console.log(hasUniqueCharacters("ABCD"))  
  