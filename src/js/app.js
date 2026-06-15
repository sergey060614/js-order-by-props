function orderByProps(obj, order) {
  const addedKeys = new Set();
const result = [];

for (let i = 0; i < order.length; i++) {
  const key = order[i];
  if (Object.prototype.hasOwnProperty.call(obj, key) && !addedKeys.has(key)) {
    result.push({ key, value: obj[key] });
    addedKeys.add(key);
  }
}


  const remainingKeys = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key) && !addedKeys.has(key)) {
    remainingKeys.push(key);
    }
  }

  remainingKeys.sort().forEach((key) => {
    result.push({ key, value: obj[key] });
  });

  return result;
}

export { orderByProps };