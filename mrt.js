// Ambil elemen select dari DOM
var stFromSelect = document.getElementById("st-from");
var stToSelect = document.getElementById("st-to");

// Array stasiun
var stasiunOptions = [
  "Lebak Bulus Grab",
  "Fatmawati",
  "Cipete Raya",
  "Haji Nawi",
  "Blok A",
  "Blok M BCA",
  "ASEAN",
  "Senayan",
  "Istora Mandiri",
  "Bendungan Hilir",
  "Setiabudi Astra",
  "Dukuh Atas BNI",
  "Bundaran HI",
];

// Fungsi untuk menambahkan opsi-opsi stasiun ke dalam dropdown
function tambahkanOpsi(selectElement, optionsArray) {
  optionsArray.forEach(function (stasiun) {
    var option = document.createElement("option");
    option.text = stasiun;
    selectElement.add(option);
  });
}

// Panggil fungsi untuk menambahkan opsi-opsi stasiun ke dalam dropdown
tambahkanOpsi(stFromSelect, stasiunOptions);
tambahkanOpsi(stToSelect, stasiunOptions);

var tarifMRT = {
  "Lebak Bulus Grab": {
    Fatmawati: 4000,
    "Cipete Raya": 5000,
    "Haji Nawi": 6000,
    "Blok A": 7000,
    "Blok M BCA": 8000,
    ASEAN: 9000,
    Senayan: 10000,
    "Istora Mandiri": 11000,
    "Bendungan Hilir": 12000,
    "Setiabudi Astra": 13000,
    "Dukuh Atas BNI": 14000,
    "Bundaran HI": 14000,
  },
  Fatmawati: {
    "Lebak Bulus Grab": 4000,
    "Cipete Raya": 4000,
    "Haji Nawi": 5000,
    "Blok A": 6000,
    "Blok M BCA": 7000,
    ASEAN: 7000,
    Senayan: 9000,
    "Istora Mandiri": 9000,
    "Bendungan Hilir": 10000,
    "Setiabudi Astra": 11000,
    "Dukuh Atas BNI": 12000,
    "Bundaran HI": 13000,
  },
  "Cipete Raya": {
    "Lebak Bulus Grab": 5000,
    Fatmawati: 4000,
    "Haji Nawi": 3000,
    "Blok A": 4000,
    "Blok M BCA": 5000,
    ASEAN: 6000,
    Senayan: 7000,
    "Istora Mandiri": 8000,
    "Bendungan Hilir": 9000,
    "Setiabudi Astra": 9000,
    "Dukuh Atas BNI": 10000,
    "Bundaran HI": 11000,
  },
  "Haji Nawi": {
    "Lebak Bulus Grab": 6000,
    Fatmawati: 5000,
    "Cipete Raya": 3000,
    "Blok A": 3000,
    "Blok M BCA": 4000,
    ASEAN: 5000,
    Senayan: 6000,
    "Istora Mandiri": 7000,
    "Bendungan Hilir": 8000,
    "Setiabudi Astra": 8000,
    "Dukuh Atas BNI": 8000,
    "Bundaran HI": 9000,
  },
  "Blok A": {
    "Lebak Bulus Grab": 7000,
    Fatmawati: 6000,
    "Cipete Raya": 4000,
    "Haji Nawi": 3000,
    "Blok M BCA": 3000,
    ASEAN: 4000,
    Senayan: 5000,
    "Istora Mandiri": 6000,
    "Bendungan Hilir": 7000,
    "Setiabudi Astra": 7000,
    "Dukuh Atas BNI": 9000,
    "Bundaran HI": 9000,
  },
  "Blok M BCA": {
    "Lebak Bulus Grab": 8000,
    Fatmawati: 7000,
    "Cipete Raya": 5000,
    "Haji Nawi": 4000,
    "Blok A": 3000,
    ASEAN: 3000,
    Senayan: 4000,
    "Istora Mandiri": 5000,
    "Bendungan Hilir": 6000,
    "Setiabudi Astra": 6000,
    "Dukuh Atas BNI": 7000,
    "Bundaran HI": 8000,
  },
  ASEAN: {
    "Lebak Bulus Grab": 9000,
    Fatmawati: 7000,
    "Cipete Raya": 6000,
    "Haji Nawi": 5000,
    "Blok A": 4000,
    "Blok M BCA": 3000,
    Senayan: 3000,
    "Istora Mandiri": 4000,
    "Bendungan Hilir": 5000,
    "Setiabudi Astra": 6000,
    "Dukuh Atas BNI": 7000,
    "Bundaran HI": 7000,
  },
  Senayan: {
    "Lebak Bulus Grab": 11000,
    Fatmawati: 9000,
    "Cipete Raya": 8000,
    "Haji Nawi": 7000,
    "Blok A": 6000,
    "Blok M BCA": 5000,
    ASEAN: 4000,
    "Istora Mandiri": 3000,
    "Bendungan Hilir": 3000,
    "Setiabudi Astra": 3000,
    "Dukuh Atas BNI": 4000,
    "Bundaran HI": 5000,
  },
  "Istora Mandiri": {
    "Lebak Bulus Grab": 11000,
    Fatmawati: 9000,
    "Cipete Raya": 8000,
    "Haji Nawi": 7000,
    "Blok A": 6000,
    "Blok M BCA": 5000,
    ASEAN: 4000,
    Senayan: 3000,
    "Bendungan Hilir": 3000,
    "Setiabudi Astra": 3000,
    "Dukuh Atas BNI": 4000,
    "Bundaran HI": 5000,
  },
  "Bendungan Hilir": {
    "Lebak Bulus Grab": 12000,
    Fatmawati: 10000,
    "Cipete Raya": 9000,
    "Haji Nawi": 8000,
    "Blok A": 7000,
    "Blok M BCA": 6000,
    ASEAN: 5000,
    Senayan: 4000,
    "Istora Mandiri": 3000,
    "Setiabudi Astra": 3000,
    "Dukuh Atas BNI": 3000,
    "Bundaran HI": 4000,
  },
  "Setiabudi Astra": {
    "Lebak Bulus Grab": 13000,
    Fatmawati: 11000,
    "Cipete Raya": 9000,
    "Haji Nawi": 8000,
    "Blok A": 7000,
    "Blok M BCA": 6000,
    ASEAN: 6000,
    Senayan: 4000,
    "Istora Mandiri": 3000,
    "Bendungan Hilir": 3000,
    "Dukuh Atas BNI": 3000,
    "Bundaran HI": 4000,
  },
  "Dukuh Atas BNI": {
    "Lebak Bulus Grab": 14000,
    Fatmawati: 12000,
    "Cipete Raya": 10000,
    "Haji Nawi": 9000,
    "Blok A": 8000,
    "Blok M BCA": 7000,
    ASEAN: 7000,
    Senayan: 5000,
    "Istora Mandiri": 4000,
    "Bendungan Hilir": 3000,
    "Setiabudi Astra": 3000,
    "Bundaran HI": 3000,
  },
  "Bundaran HI": {
    "Lebak Bulus Grab": 14000,
    Fatmawati: 13000,
    "Cipete Raya": 11000,
    "Haji Nawi": 10000,
    "Blok A": 9000,
    "Blok M BCA": 8000,
    ASEAN: 7000,
    Senayan: 6000,
    "Istora Mandiri": 5000,
    "Bendungan Hilir": 4000,
    "Setiabudi Astra": 4000,
    "Dukuh Atas BNI": 3000,
  },
  // Definisi stasiun lainnya...
};

document.querySelector(".submitBtn").addEventListener("click", function () {
  // Ambil nilai dari input saldo
  var saldoInput = document.getElementById("saldo").value;
  var saldoAwal = saldoInput ? parseInt(saldoInput) : null;

  // Jika saldo diisi dan kurang dari 14000, tampilkan peringatan
  if (saldoAwal !== null && saldoAwal < 14000) {
    Swal.fire({
      icon: "error",
      title: "Maaf",
      text: "Saldo awal minimal adalah Rp 14.000.",
    });
    return;
  }

  // Ambil nilai dari dropdown stasiun asal dan stasiun tujuan
  var stasiunAsal = document.getElementById("st-from").value;
  var stasiunTujuan = document.getElementById("st-to").value;

  // Cek apakah stasiun asal dan stasiun tujuan valid
  if (
    stasiunAsal === "Dari Stasiun Mana?" ||
    stasiunTujuan === "Sampai Stasiun Mana?"
  ) {
    Swal.fire({
      icon: "error",
      title: "Maaf",
      text: "Silahkan Pilih Stasiun Asal dan Tujuan",
    });
    return;
  }

  // Hitung tarif perjalanan
  var tarif = tarifMRT[stasiunAsal][stasiunTujuan];

  // Jika saldo diisi, hitung saldo akhir
  var saldoAkhir = saldoAwal !== null ? saldoAwal - tarif : null;

  // Tampilkan hasilnya
  document.getElementById("from-to").textContent =
    stasiunAsal + " ke " + stasiunTujuan;
  document.getElementById("ongkos").textContent = "Rp " + tarif;
  document.getElementById("saldo-akhir").textContent =
    saldoAkhir !== null ? "Sisa Saldo: Rp " + saldoAkhir : "";

  // Jika saldo diisi dan saldo akhir kurang dari 0, tampilkan peringatan
  if (saldoAkhir !== null && saldoAkhir < 0) {
    Swal.fire({
      icon: "error",
      title: "Maaf",
      text: "Saldo tidak mencukupi untuk membayar tarif ini.",
    });
  }
});
