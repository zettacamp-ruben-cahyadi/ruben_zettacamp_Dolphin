function discountCalculation(bookPrice, discountPercentage){
    return discount = (bookPrice * discountPercentage) / 100
}

function taxCalculation(bookPrice, taxPercentage){
    return tax = (bookPrice * taxPercentage) / 100
}

function purchaseBook(bookDetails, discountPercentage, taxPercentage) {
    const book_price = bookDetails.price
    const is_best_seller = bookDetails.isBestSeller
    const book_title = bookDetails.title
    const book_ID = bookDetails.ID
    const bank_payment = bookDetails.bankPayment
    
    // Discount
    const discount_amount = discountCalculation(book_price, discountPercentage)
    const price_after_discount = book_price - discount_amount
    
    // Tax
    const tax_amount = taxCalculation(book_price, taxPercentage)
    const price_after_tax = price_after_discount + tax_amount
    const total_price = price_after_tax
  
    console.log('============== Book Details ==============')
    console.log('\n')
    console.log(`Book Title:`,book_title + ` (`,is_best_seller ? 'Best Seller )' : 'Regular )') // ternary operator
    console.log(`Book ID:`,book_ID)
    console.log(`Book Price:`,book_price)
    console.log(`Discount Amount:`,discount_amount)
    console.log(`Price After Discount:`,price_after_discount)
    console.log(`Tax Amount:`,tax_amount)
    console.log(`Price After Tax:`,price_after_tax)
    console.log(`Final Price:`,total_price)
    console.log('\n')
    console.log(`Available Bank payment:`,bank_payment)

    console.log('\n')
    console.log('==========================================')
    console.log('==========================================')
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
  
  purchaseBook(bookDetails, discount_percentage, tax_percentage);
  