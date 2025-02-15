
function oddNumbers(numbers) {

  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1)
    {
      odds.push(number);
    }
  }
  //console.log(odds)
  let sum=0
  for (const number of odds) {
    sum = sum + number;

  }
 
  const count = odds.length;
  console.log(sum, count);
  
  const avg = sum / count;
  return avg;
}
const numbers =[11, 12, 13, 13, 45, 66, 75, 44, 77,99,5,67];
const avg = oddNumbers(numbers);
console.log('avarage thes odad numbers;',avg)