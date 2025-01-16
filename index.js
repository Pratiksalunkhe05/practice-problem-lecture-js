function calculateDiscount(price, discount = 10) {
  return price - (price * (discount / 100));
}

function mergeArrays(array1, array2) {
  return [...array1, ...array2];
}

function logArguments(...args) {
  console.log(args);
}

function createMessage(defaultMessage, ...names) {
  return names.map(name => `${defaultMessage}, ${name}!`);
}

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [2, 4, 6];
const total = sum(...numbers);

function createUserProfile(username, age = 25, country = "Unknown") {
  return {
    username: username,
    age: age,
    country: country
  };
}

const discountedPrice = calculateDiscount(100, 20);
const combinedArray = mergeArrays([1, 2, 3], [4, 5, 6]);
logArguments(1, 'hello', true);
const messages = createMessage('Welcome', 'lpu', 'jalandhar', 'univer');
const userProfile = createUserProfile('kunal kumar', 30, 'india');

console.log(discountedPrice);
console.log(combinedArray);
console.log(messages);
console.log(total); 
console.log(userProfile);