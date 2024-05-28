export default function appendToEachArrayValue(array, appendString) {
  const newA = [];
  for (const value of array) {
    newA.push(appendString + value);
  }

  return newA;
}
