module.exports = function(array, targetLength = 0, item = 0) {
  while (array.length < targetLength) {
    array.unshift(item);
  }
  return array;
};
