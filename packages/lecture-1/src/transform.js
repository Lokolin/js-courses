export function transformData(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Not an array');
  }
  var transformatedArray = {};
  var key = 0;
  arr.forEach(element => {
    if (element.key == null || element.key == undefined) {
      element.key = key;
      transformatedArray[element.key] = element.value;
      key++;
    } else {
      if (!element.key.includes('garbage')) {
        transformatedArray[element.key] = element.value;
      }
    }
  });
  return transformatedArray;
  // TODO: write some code to make test work
}
