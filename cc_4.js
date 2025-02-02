//Task 1 - Customer Discounts
let purchaseAmount = 300; //Purchase amount
let finalAmount = purchaseAmount; //Initializing the final amount to the original purchase amount

//Applying a 20% discount if the purchase amount is greater than 100
if (purchaseAmount > 100) {
  finalAmount = purchaseAmount * 0.8; //20% discount applied
  console.log("Discount applied"); //To show that the discount was given
}

//Logging the final amount after the discount is applied
console.log(`Final amount after discount: $${finalAmount}`);
