export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') return ('');
  const result = [];

  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(startString.lenght));
    }
  });
  return result.join('-');
}
