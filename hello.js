function addNumbers(a, b) {
  return a + b;
}

function calculateDaysBetweenDates(begin, end) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(begin);
  const secondDate = new Date(end);

  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}
