module.exports = (str) => {
  const different = Date.now() - new Date(str).getTime();
  const age = new Date(different);

  return Math.abs(age.getUTCFullYear() - 1970);
}