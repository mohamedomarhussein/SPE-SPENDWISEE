console.log("im building the index.js file");
monthlyBudget = 6000;
console.log("monthlyBudget: " + monthlyBudget);

appName = "spending-tracker";
console.log("appName: " + appName);

name = "maslah";
console.log("name: " + name);


let expenseName = "rent";
let expenseAmount = 1500;
let expenseDate = "2023-06-01";
console.log("expenseName: " + expenseName);
console.log("expenseAmount: " + expenseAmount);
console.log("expenseDate: " + expenseDate);

let expenseName2 = "groceries";
let expenseAmount2 = 500;
let expenseDate2 = "2023-06-05";

console.log("expenseName2: " + expenseName2);
console.log("expenseAmount2: " + expenseAmount2);
console.log("expenseDate2: " + expenseDate2);

let totalExpenses = expenseAmount + expenseAmount2;
console.log("totalExpenses: " + totalExpenses);

let remainingBudget = monthlyBudget - totalExpenses;
console.log("remainingBudget: " + remainingBudget);

// 2. numbers

let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
console.log("sum: " + sum);

let difference = num1 - num2;
console.log("difference: " + difference);

let product = num1 * num2;
console.log("product: " + product);

// 3. booleans

let isBudgetExceeded = remainingBudget < 0;
console.log("isBudgetExceeded: " + isBudgetExceeded);

let isExpenseAffordable = expenseAmount <= remainingBudget;
console.log("isExpenseAffordable: " + isExpenseAffordable);

// 4. arrays

let expenses = [
  { name: expenseName, amount: expenseAmount, date: expenseDate },
  { name: expenseName2, amount: expenseAmount2, date: expenseDate2 }
];

console.log("expenses: ", expenses);

let expenseNames = expenses.map(expense => expense.name);
console.log("expenseNames: ", expenseNames);

let expenseAmounts = expenses.map(expense => expense.amount);
console.log("expenseAmounts: ", expenseAmounts);

// combine varialbles and datatypes

let budgetSummary = {
  appName: appName,
  monthlyBudget: monthlyBudget,
  totalExpenses: totalExpenses,
  remainingBudget: remainingBudget,
  expenses: expenses
};

console.log("budgetSummary: ", budgetSummary);

// 5. functions

function addExpense(name, amount, date) {
  let newExpense = { name: name, amount: amount, date: date };
  expenses.push(newExpense);
  totalExpenses += amount;
  remainingBudget -= amount;
  console.log("Added expense: ", newExpense);
  console.log("Updated totalExpenses: " + totalExpenses);
  console.log("Updated remainingBudget: " + remainingBudget);
}

addExpense("utilities", 200, "2023-06-10");