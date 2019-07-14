export function transformData(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  var transformatedArray = {};
  arr.forEach(element => {
    if (element.key == null || element.key == undefined) {
    } else if (!element.key.match('garbage')) {
      transformatedArray[element.key] = element.value;
    }
  });
  return transformatedArray;
  // TODO: write some code to make test work
}
