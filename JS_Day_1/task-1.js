//TASK 1

try {
    // Declare two variable with name of your favorite books
    let favBook_1 = "Harry Potter and the Cursed Child"
    const favBook_2 = "Harry Potter and the Deathly Hallows"

    console.log("My 1st favorite book is: "+favBook_1)
    console.log("My 2nd favorite book is: "+favBook_2)

    // a. Update value of first with name your least favorite book
    favBook_1 = "Rich Dad Poor Dad"
    console.log("[UPDATE] My 1st least favorite book is: "+favBook_1)

    // b. Define second variable as constant and try update the value
    favBook_2 = "Stone Bridges"
    console.log("[UPDATE] My 2nd favorite book is: "+favBook_2) 

} catch (error) {
    let favBook_1 = "Harry Potter and the Cursed Child"
    const favBook_2 = "Harry Potter and the Deathly Hallows"

    const favBook = favBook_1 + " & " + favBook_2
    console.log("[CONCAT] My favorite Books are: "+favBook)
}






