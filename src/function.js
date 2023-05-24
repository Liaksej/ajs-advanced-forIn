function orderByProps(obj, props) {
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
    if (a.key < b.key) {
      return -1;
    }
    if (a.key > b.key) {
      return 1;
    }
    return 0;
  });
  console.log([...firstPropsList, ...restPropsList]);
  return [...firstPropsList, ...restPropsList];
}

const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };

orderByProps(obj, ["name", "level"]);
