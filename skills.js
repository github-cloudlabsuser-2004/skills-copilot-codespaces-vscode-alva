// function to covert Celsius
// to Fahrenheit
function cToF(celsius) {
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
}

// Driver code
const celsius = 60;
const result = cToF(celsius);
console.log(`${celsius} degree Celsius is equal to ${result} degree Fahrenheit`);