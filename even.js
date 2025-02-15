function evenNumber(numbers) {
  const evens = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      
      evens.push(number);
    }
  }
  let sum = 0;
  for (const number of evens) {
    sum = sum + number;
   
  }
  const count = evens.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;
}
const numbers=[100,200,400,25,46,67]
const avg = evenNumber(numbers);
console.log('some of even numbers;', avg);