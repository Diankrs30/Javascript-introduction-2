// Method bawaan Javascript
// 1. Array concat()
// - concat() method berfungsi untuk menggabungkan 2 array atau lebih menjadi 1 array
// - method ini mengembalikan sebuah array baru tanpa mengubah array yang ada (immutable)
// - karena method ini mengembalikan nilai (return), maka diperlukan variabel baru sebagai penampung
// - syntax => array.concat(value1, value2, ..., valueN);
// - parameternya berupa array dan/atau item tambahan yang akan ditambahkan diakhir array
// example:
const carnivore = ["tiger", "lion", "wolf"];
const herbivore = ["rabbit", "goat", "cow"];

const animal = carnivore.concat(herbivore);
console.log(animal);

// 2. Array shift()
// - shift() method berfungsi untuk menghilangkan elemen pertama dari sebuah array dan mengembalikan elemen yang dihilangkan
// - method ini mengubah panjang array (mutable)
// - syntax => array.shift();
// - tidak ada parameter
// example:
const fruits = ["apple", "banana", "mango", "durian"];
const firstElement = fruits.shift();
console.log(fruits);
console.log(firstElement);

// 3. Array unshift()
// - unshift() method berfungsi untuk menambahkan satu atau lebih elemen ke awal array dari sebuah array dan mengembalikan panjang array yang baru (mutable).
// - syntax => array.unshift(element0, element1, ..., elementN);
// - parameter => elemen yaang akan ditambahkan ke awal array.
// example:
const fruits2 = ["apple", "banana", "mango", "durian"];
const addElement = fruits2.unshift("grape", "melon");
console.log(fruits2);


// 4. String toLowerCase()
// - toLowerCase() method berfungsi untuk mengembalikan nilai string yang dikonversi ke huruf kecil
// - method ini tidak mempengaruhi nilai dari string itu sendiri (immutable)
// - syntax => str.toLowerCase();
// - tidak ada parameter
// example:
const name = "Bootcamp Coding Online Bersama Fazztrack";
console.log(name.toLowerCase());

// 5. String slice()
// - slice() method digunakan untuk mengekstraksi bagian dalam string dan mengembalikannya sebagai string baru, tanpa mengubah string asli (immtable)
// - syntax => str.slice(indexStart, indexEnd);
// - parameter => 
//      indexStart = indeks karakter pertama yang disertakan dalam sub-string yang dikembalikan
//      indexEnd = indeks karakter pertama yang dikecualikan dari sub-string yang dikembalikan
// example:
const str = 'Bootcamp Coding Online Bersama Fazztrack.';
console.log(str.slice(31));
console.log(str.slice(9, 22));