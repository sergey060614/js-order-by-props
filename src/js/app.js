function orderByProps(obj, order) {
  const result = [];
  const addedKeys = {};

  for (let i = 0; i < order.length; i++) {
    const key = order[i];
    if (obj.hasOwnProperty(key)) {
      result.push({ key, value: obj[key] });
      addedKeys[key] = true;
    }
  }

  const remainingKeys = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !addedKeys[key]) {
      remainingKeys.push(key);
    }
  }

  remainingKeys.sort().forEach((key) => {
    result.push({ key, value: obj[key] });
  });

  return result;
}

export { orderByProps };