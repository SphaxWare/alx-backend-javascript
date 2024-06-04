export default function hasValuesFromArray(set, arr) {
  const inset = (value) => set.has(value);
  return arr.every(inset);
}
