function discountCalculation(bookPrice, discountPercentage){
    return discount = (bookPrice * discountPercentage) / 100
}

function taxCalculation(bookPrice, taxPercentage){
    return tax = (bookPrice * taxPercentage) / 100
}

function purchaseBook(bookDetails, discountPercentage, taxPercentage, stockAmount, purchasedAmount) {
    const book_price = bookDetails.price
    const is_best_seller = bookDetails.isBestSeller
    const book_title = bookDetails.title
    const book_ID = bookDetails.ID
    const bank_payment = bookDetails.bankPayment
    let total_price = 0

    let remaining_stock = stockAmount

    for (let i = 0; i < purchasedAmount; i++) {
        
        // Discount 
        const discount_amount = discountCalculation(book_price, discountPercentage)
        const price_after_discount = book_price - discount_amount
        
        // Tax 
        const tax_amount = taxCalculation(book_price, taxPercentage)
        const price_after_tax = price_after_discount + tax_amount

        total_price += price_after_tax 
        

        console.log(`============== Book count: ${i + 1} ==============\n`)
        console.log(`Book Title:`,book_title + ` (`,is_best_seller ? 'Best Seller )' : `Regular )`) // ternary operator
        console.log(`Book Price:`,book_price)
        console.log(`Book ID:`,book_ID)
        console.log(`Discount Amount:`,discount_amount + `\n` + `Tax Amount:`,tax_amount+ `\n`)
        console.log(`Price After Discount:`,price_after_discount)
        console.log(`Price After Tax:`,price_after_tax+ `\n`)

        remaining_stock--

        if (remaining_stock == 0 ) {
            console.log(`==================== Final Price =====================\n`)

            console.log(`Total Price:`,total_price + `\n`)
            console.log(`Available Bank payment:`,bank_payment + `\n`)
            console.log(`(Remaining stock:`,remaining_stock +` unable to purchase more\n`)
            break
        }
    }

    if(remaining_stock > 0){
        console.log(`==================== Final Price =====================\n`)

        console.log(`Total Price:`,total_price + `\n`)
        console.log(`Available Bank payment:`,bank_payment + `\n`)
        console.log(`(Remaining stock:`,remaining_stock + ` books, you are able to purchase again\n`)

    } 
    console.log(`==========================================`)
    console.log(`==========================================`)
}
  
  // OBJECT Book Details
  const bookDetails = {
    title: "Rich Dad Poor Dad", 
    price: 25000, 
    isBestSeller: true, 
    ID: BigInt(1234567890123456), 
    bankPayment: ['Mandiri', 'BCA', 'BRI', 'CIMB Niaga', 'BNI' ] 
  };
  
  const discount_percentage = 20
  const tax_percentage = 8
  const amount_of_stock = 3
  const amount_of_purchased = 5
  
  purchaseBook(bookDetails, discount_percentage, tax_percentage, amount_of_stock, amount_of_purchased)
