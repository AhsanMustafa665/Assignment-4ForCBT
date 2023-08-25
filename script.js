// 1: Find data types -
function checkDataTypes(argument1, argument2, argument3) {
  console.log(argument1, "- Its data types are", typeof argument1, ".");
  console.log(argument2, "- Its data types are", typeof argument2, ".");
  console.log(argument3, "- Its data types are", typeof argument3, ".");
}
checkDataTypes(55, false, "Mostafa");

// 2: Find leap year -
function checkLeapYear(year) {
  if (year % 4 == 0 || year % 400 == 0) {
    console.log(year, "is a leap year.");
  } else {
    console.log(year, "is not a leap year.");
  }
}
checkLeapYear(2024);

// 3: Arithmetic operation -
function evalNumbers(number1, number2, operation) {
  let output;
  switch (operation) {
    case "add":
      output = number1 + number2;
      break;
    case "subtract":
      output = number1 - number2;
      break;
    case "multiply":
      output = number1 * number2;
      break;
    case "divide":
      output = number1 / number2;
      break;
    case "modulus":
      output = number1 % number2;
      break;
    default:
      console.log("Your operation went wrong!");
      return;
  }
  console.log("Its output is :", output);
}
evalNumbers(10, 5, "multiply");

// 4: Maximum number -
function findLargest(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1, "is larger than", num2, "and", num3);
  } else if (num2 > num3) {
    console.log(num2, "is larger than", num1, "and", num3);
  } else {
    console.log(num3, "is larger than", num1, "and", num2);
  }
}
findLargest(100, 200, 300);
