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

//Task 4 - Customer Survey
let responses = 0; //Initalize the response count

//Collecting responses until the count reaches 3
do {
  console.log(`Collecting responses: ${responses}`); //Logging the current count
  responses++; //Incrementing the response count
} while (responses < 3); //Condition to stop when responses hit 3

//Task 5 - Employee Information
let employee = {
  name: "Alice", //Name
  position: "Manager", //Job position
  salary: 75000 //Salary amount
}; //Employee object with key value pairs

//Looping through each key (property) in the employee object
for (let key in employee) {
  console.log(`${key}: ${employee[key]}`); //Displaying the property and its value
}

//Task 6 - Product Listings
let products = ["Air Fryer", "Vacuum Cleaner", "Microwave Oven"]; //Array of products

//Looping through each item in the products array
for (let product of products) {
  console.log(`Product: ${product}`); //Logging each product name
}

//Task 7 - Order Processing
let orders = [114, 115, 116]; //Array of order IDs

//Using forEach to process each order in the array
orders.forEach(order => {
  console.log(`Order ID: ${order}`); //Logging each order ID
});

//Task 8 - Tax Calculation
function calculateTax(amount, taxRate) {
  return amount * taxRate; //Calculate and return tax based on the given amount
}

//Calling the function with some values and storing the result
let tax = calculateTax(1500, 0.09);

//Logging the calculated tax amount
console.log(`Tax: $${tax}`);
