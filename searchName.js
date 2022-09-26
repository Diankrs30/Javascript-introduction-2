const searchName = (str, num, callback) => {
  //   if (typeof callback !== "function") return "invalid parameter";
  const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ];

  const newName = callback(name);
  let filterName = newName.filter((element) => element.indexOf(str) !== -1);
  let result = [];
  filterName.map((element) => {
    const upperName = element.charAt(0).toUpperCase() + element.slice(1);
    result.push(upperName);
  });
  result = result.slice(0, num);
  return result;
};

const toLowerCase = (name) => {
  let newName = [];
  for (let i = 0; i < name.length; i++) {
    newName.push(name[i].toLowerCase());
  }
  return newName;
};
console.log(searchName("an", 3, toLowerCase));