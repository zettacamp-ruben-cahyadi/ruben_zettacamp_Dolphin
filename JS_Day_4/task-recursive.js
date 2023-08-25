function discountCalculation(bookPrice, discountPercentage) {
    return (bookPrice * discountPercentage) / 100
}

function taxCalculation(bookPrice, taxPercentage) {
    return (bookPrice * taxPercentage) / 100
}

function purchaseBookRecursive(bookDetails, discountPercentage, taxPercentage, stockAmount, purchasedBooks) {
    if (purchasedBooks === 0) {
        console.log('==================== Final Price =====================\n')
        console.log(`Total Price:`, total_price)
        console.log('\n')

        if (remaining_stock > 0) {
            console.log(`Remaining stock:`, remaining_stock + ` books, you are able to purchase more`)
        } else {
            console.log(`Book is out of stock`)
        }

        console.log('\n')
        console.log('==========================================')
        console.log('==========================================')
        return
    }

    const book_price = bookDetails.price
    const is_best_seller = bookDetails.isBestSeller
    const book_title = bookDetails.title
    const book_ID = bookDetails.ID
    const bank_payment = bookDetails.bankPayment
    console.log('Trynna see if it working', bank_payment)
    if (remaining_stock === 0) {
        console.log(`Book is out of stock, unable to purchase more`)
        return
    }

    // Discount
    const discount_amount = discountCalculation(book_price, discountPercentage)
    const price_after_discount = book_price - discount_amount

    // Tax
    const tax_amount = taxCalculation(book_price, taxPercentage)
    const price_after_tax = price_after_discount + tax_amount

    total_price += price_after_tax
    remaining_stock--


    console.log(`============== Book count: `,amount_of_purchased - purchasedBooks + 1 + `==============\n`)
    console.log(`Book Title:`, book_title + ` (`, is_best_seller ? `Best Seller )` : `Regular )`) // ternary operator
    console.log(`Book Price:`, book_price)
    console.log(`Book ID:`, book_ID)
    console.log(`Book ID:`, book_ID)
    console.log(`Discount Amount:`, discount_amount + `\n` + `Tax Amount:`, tax_amount + `\n`)
    console.log(`Price After Discount:`, price_after_discount)
    console.log(`Price After Tax:`, price_after_tax + `\n`)

    
    purchaseBookRecursive(bookDetails, discountPercentage, taxPercentage, stockAmount, purchasedBooks - 1)
}

// OBJECT Book Details
const bookDetails = {
    title: "Rich Dad Poor Dad", // String
    price: 25000, // Number
    isBestSeller: true, // Boolean
    ID: BigInt(1234567890123456), // Big Int
    bankPayment: ['Mandiri', 'BCA', 'BRI', 'CIMB Niaga', 'BNI' ] // Array
};

const discount_percentage = 20
const tax_percentage = 8
const amount_of_stock = 100
const amount_of_purchased = 100
let total_price = 0
let remaining_stock = amount_of_stock

purchaseBookRecursive(bookDetails, discount_percentage, tax_percentage, amount_of_stock, amount_of_purchased)
