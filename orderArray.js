const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  // validasi
  if (typeof nilaiAwal !== "number") return "Nilai awal harus number";
  if (typeof nilaiAkhir !== "number") return "Nilai akhir harus number";
  if (!Array.isArray(dataArray)) return "Parameter harus Array";
  for (let i = 0; i < dataArray.length; i++) {
    if (typeof dataArray[i] !== "number") return "Data harus number";
  }
  if (nilaiAwal > nilaiAkhir)
    return "Nilai akhir harus lebih besar dari nilai awal";
  if (dataArray.length <= 5)
    return "Jumlah angka dalam dataArray harus lebih dari 5";

  // mencari data di dalam array
  let result = [];
  for (let i = 0; i < dataArray.length; i++) {
    if (nilaiAwal < dataArray[i] && nilaiAkhir > dataArray[i]) {
      result.push(dataArray[i]);
    }
  }
  return result.sort(function (a, b) {
    return a - b;
  });
};
console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
