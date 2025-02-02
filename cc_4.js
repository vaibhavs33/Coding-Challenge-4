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

//Task 2 - Sales Report
let sales = [130, 100, 170, 140, 80]; //Array called sales storing 5 numerical values
let totalSales = 0; //Variable totalSales is to store the total sales

//Looping through the sales array and summing all of the values
for (let i = 0; i < sales.length; i++) {
  totalSales += sales[i]; //Adding each sale amount to totalSales
}

//Logging the total sales amount to the console
console.log(`Total sales: $${totalSales}`);

//Task 3 - Inventory Depletion
let stock = 10; //Initial stock value

//Decreasing the stock until it reaches 0
while (stock > 0) {
  console.log(`Stock remaining: ${stock}`); //Displaying the current stock count
  stock--; //Reducing the stock by 1 per iteration
}
//Logging when there is no more in stock
console.log("Out of stock");
