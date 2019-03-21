export const path = (keyPath, obj) => {
  let result = obj;

  for (let i = 0; i < keyPath.length; i++) {
    let k = keyPath[i];

    try {
      result = result[k];
    } catch (err) {
      result = undefined;
    }

  }

  return result;
};
