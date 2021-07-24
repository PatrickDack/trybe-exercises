const myRemoveWithoutCopy = (arr, item) => {
  const itemIndex = arr.findIndex((element) => element === item);
  arr.forEach((element) => element === item ? arr.splice(itemIndex, 1) : null);
  return arr;
}

module.exports = myRemoveWithoutCopy;