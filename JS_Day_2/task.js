/**
 *
 * [OBJECT]
 *
 */
const favBooks = {
    favBook_1 : 'Harry Potter and the Cursed Child',
    favBook_2 : 'Harry Potter and the Deathly Hallows'
}

const bookPrice = {
    favBook_1_price : 100000,
    favBook_2_price : 400000
}

const newObject = {
    favBooks_3_pages : 500
}

/**
 *
 * [ARRAY]
 *
 */
const bookPages = [{favBook_1_pages : 347},{favBook_2_pages : 432}]


console.log('\n')
console.log('\n')

// Display favorite books before new key assigned
console.log('- Favorite Books [object] before new key assigned -')
console.log(favBooks)
console.log('\n')

// Assign new key into favBooks object
favBooks.favBook_3 = 'Harry Potter and the Order of the Phoenix'
console.log('- Favorite Books [object] after new key assigned -')
console.log(favBooks)
console.log('\n')

// Display array book pages before new object being pushed
console.log('- Books pages [array object] before new object pushed -')
console.log(bookPages)
console.log('\n')
 
// Display array book pages after new object being pushed
bookPages.push(newObject) 
console.log('- Books pages [array object] after new object being pushed -')
console.log(bookPages)
console.log('\n')

// [Task 1.a] Book name comparison
let favBook_comparison = favBooks.favBook_1 === favBooks.favBook_2 // using strict equal
console.log('[Name Comparison] Does the books have the same name?: '+favBook_comparison) 

// [Task 2.a] Comparing prices of the books
let favBook_highest_price = bookPrice.favBook_1_price > bookPrice.favBook_2_price ? bookPrice.favBook_1_price : bookPrice.favBook_2_price // using ternary operator
console.log('[Highest Price] The highest price is: '+ favBook_highest_price) 

// average price of the books 1 & 2
let favBook_average_price = (bookPrice.favBook_1_price + bookPrice.favBook_2_price) / 2 // arithmetic operator
console.log('[Average Price] The average price of the books 1 & 2 is: '+favBook_average_price)

// determine the value of variables
let favBook_value_price = favBook_average_price <= 500000 ? "Cheap" : "Expensive" // using ternary operator
console.log("[Value] The value of the book's average price is: "+favBook_value_price)
console.log('\n')
console.log('\n')