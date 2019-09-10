const randomNum = require('./randomNum');

module.exports = () => {
  const year = randomNum(1980, 2000);
  const month = randomNum(1, 12);
  const day = randomNum(1, 28);

  return `${year}, ${month}, ${day}`;
}