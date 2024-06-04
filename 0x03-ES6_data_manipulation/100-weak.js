export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  let queryCount = weakMap.get(endpoint);
  queryCount += 1;

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, queryCount);
}
