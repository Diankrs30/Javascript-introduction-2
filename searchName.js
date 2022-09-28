const searchName = (str, num, callback) => {
  // validasi
  if (typeof str !== "string") return "invalid! parameter harus string";
  if (typeof num !== "number") return "invalid! paramater harus number";
  if (typeof callback !== "function") return "invalid! parameter harus function";
  if (num <= 0) return "Parameter harus lebih dari nol";

  // proses
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

  let result = [];
  for (let i = 0; i < name.length; i++) {
    if (callback(name[i], str)) {
      result.push(name[i]);
    }
  }
  if (result == 0) return "Data tidak ditemukan";
  return result.slice(0, num); 
};

// callback function => mencari data sesuai dengan kriteria yang diinginkan 
const search = (element, input) => {
  const searched = element.toLowerCase().indexOf(input.toLowerCase()) !== -1;
  // console.log(searched); // true or false
  return searched;
};

console.log(searchName("an", 3, search));