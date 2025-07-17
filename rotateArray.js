function rotate(array, n) {
  if (!Array.isArray(array) || array.length === 0) return array;
  const len = array.length;
  const index = ((n % len) + len) % len;
  return array.slice(-index).concat(array.slice(0, -index));
}