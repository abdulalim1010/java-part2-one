function inchToFeet(inch)
{const feetFraction = inch / 12;
const feetNumber = parseInt(feetFraction);
const inchRmaining=inch / 12;
const result = feetNumber + ' ft ' + inchRmaining + ' inch ';
  return result;
}
const height2 = inchToFeet(78);
console.log(height2)