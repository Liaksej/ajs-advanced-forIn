export default function orderByProps(obj, props) {
  const firstPropsList = [];
  const restPropsList = [];
  for (const objKey in obj) {
    if (objKey === props[0]) {
      firstPropsList.splice(0, 0, { key: objKey, value: obj[objKey] });
    } else if (objKey === props[1]) {
      firstPropsList.splice(1, 0, { key: objKey, value: obj[objKey] });
    } else {
      restPropsList.push({ key: objKey, value: obj[objKey] });
    }
  }
  restPropsList.sort((a, b) => {
    return a.key < b.key ? -1 : 1;
  });
  return [...firstPropsList, ...restPropsList];
}
