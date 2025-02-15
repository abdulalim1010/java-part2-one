function isLeapYear(year) {
  if (year % 4 === 0)
  {
    return true;
  }
  else {
    return false;
  }
}
const leapYear = isLeapYear(38);
console.log(leapYear);