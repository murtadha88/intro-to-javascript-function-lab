// Ex1:
console.log("==================EX1==================");
function maxOfTwoNumbers(x, y) {
    if (x > y) {
      return x;
    }
    else if(y > x) {
      return y;
    }
    else {
        console.log("Both are equal");
        return x;
    }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(9, 9));


// Ex2:
console.log("==================EX2==================");
function isAdult(age) {
  if(age >= 18) {
    return "Adult";
  }
  else if(age < 0){
    return "Invaild age";
  }
  else {
    return "Minor";
  }
}
console.log('Exercise 2 Result:', isAdult(21));

  
// Ex3:
console.log("==================EX3==================");
function isCharAVowel(character) {
  if(character === "a" || character === "i" || character === "o" || character === "u" || character === "e") {
      return true;
  }
  else {
      return false;
  }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));


// Ex4:
console.log("==================EX4==================");
function generateEmail(name, domain) {
    return `${name}@${domain}`;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


// Ex5:
console.log("==================EX5==================");
function greetUser(name,time) {
    return `Good ${time}, ${name}!`;
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


// Ex6:
console.log("==================EX6==================");
function maxOfThree(x , y , z) {
    if (x >= y && x >= z) {
      return x;
    }
    else if(y >= x && y >= z) {
      return y;
    }
    else {
        return z;
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


// Ex7:
console.log("==================EX7==================");
function calculateTip(billAmout,tip) {
    return billAmout*(tip/100);
}
console.log('Exercise 7 Result:', calculateTip(50, 20));


// Ex8:
console.log("==================EX8==================");
function convertTemperature(temperature , scale) {
    if(scale === 'C'){
        return (temperature * 9/5) + 32;
    }
    else if(scale === 'F'){
        return (temperature - 32) * 5/9;
    }
    else {
        return "Invaild Scall";
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));
console.log('Exercise 8 Result:', convertTemperature(32, "F"));


// Ex9:
console.log("==================EX8==================");
function basicCalculator(x , y , operator) {
    if(operator === "add"){
        return x + y;
    }
    else if(operator === "subtract"){
        return x - y;
    }
    else if(operator === "multiply"){
        return x * y;
    }
    else if(operator === "divide"){
        return x / y;
    }
    else {
        return "Invaild operator";
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
