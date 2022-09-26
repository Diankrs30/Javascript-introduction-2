const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  // validasi nilaiAwal dan nilaiAkhir
  if (nilaiAwal > nilaiAkhir) return "Nilai akhir harus lebih besar dari nilai awal";
  // validasi dataArray
  if (dataArray.length <= 5) return "Jumlah angka dalam dataArray harus lebih dari 5";

  // mencari data di dalam array
  let result = [];
  for (let i = 0; i < dataArray.length; i++) {
    if (nilaiAwal < dataArray[i] && nilaiAkhir > dataArray[i]) {
        result.push(dataArray[i]);
    }
  }
  result.sort((function(a, b){return a - b}))
  return result;
};
console.log(seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]));