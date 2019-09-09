module.exports = () => {
  function randomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  const year = randomNum(1980, 2000);
  const month = randomNum(1, 12);
  const day = randomNum(1, 28);

  return `${year}, ${month}, ${day}`;
}