var tarifKRL = 3000; // Tarif KRL
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

document.getElementById("jenisKereta").addEventListener("change", function () {
  var jenisKereta = this.value;
  var stasiunGroup = document.getElementById("stasiunGroup");
  if (jenisKereta === "MRT" || jenisKereta === "BOTH") {
    stasiunGroup.style.display = "block";
    populateStasiunOptions();
  } else {
    stasiunGroup.style.display = "none";
    // Clear the options for stasiunAwal and stasiunAkhir when jenisKereta is not MRT or BOTH
    document.getElementById("stasiunAwal").innerHTML = "";
    document.getElementById("stasiunAkhir").innerHTML = "";
  }
});

document.getElementById("submitBtn").addEventListener("click", function () {
  var saldo = parseFloat(document.getElementById("saldo").value);
  var jenisKereta = document.getElementById("jenisKereta").value;
  var hasilAksesDiv = document.getElementById("hasilAkses");

  if (jenisKereta === "KRL") {
    var hasilAkses =
      saldo >= 5000
        ? "Akses KRL diizinkan"
        : "Saldo tidak mencukupi untuk masuk KRL";
    hasilAksesDiv.innerHTML = hasilAkses;

    // Saldo akhir jika hanya menggunakan KRL
    var saldoAkhir =
      saldo - (hasilAkses === "Akses KRL diizinkan" ? tarifKRL : 0);
    hasilAksesDiv.innerHTML += "<br>Saldo akhir: " + saldoAkhir;

    if (hasilAkses === "Akses KRL diizinkan") {
      var lanjutMRT = confirm("Ingin melanjutkan dengan MRT?");
      if (lanjutMRT) {
        document.getElementById("jenisKereta").value = "BOTH"; // Set jenisKereta to BOTH
        document.getElementById("stasiunGroup").style.display = "block";
        populateStasiunOptions();
        return; // Return to prevent further calculation
      }
    }
  } else if (jenisKereta === "MRT") {
    var stasiunAwal = document.getElementById("stasiunAwal").value;
    var stasiunAkhir = document.getElementById("stasiunAkhir").value;

    if (saldo < 14000) {
      hasilAksesDiv.innerHTML = "Saldo tidak mencukupi untuk masuk MRT";
      return;
    }

    var tarif = tarifMRT[stasiunAwal][stasiunAkhir];
    var hasilAkses = `Akses MRT diizinkan dengan tarif ${tarif}`;
    hasilAksesDiv.innerHTML = hasilAkses;

    // Saldo akhir jika hanya menggunakan MRT
    var saldoAkhir = saldo - tarif;
    hasilAksesDiv.innerHTML += "<br>Saldo akhir: " + saldoAkhir;
  } else if (jenisKereta === "BOTH") {
    var stasiunAwal = document.getElementById("stasiunAwal").value;
    var stasiunAkhir = document.getElementById("stasiunAkhir").value;

    var saldoAkhirKRL = saldo - tarifKRL;

    if (saldoAkhirKRL < 14000) {
      hasilAksesDiv.innerHTML =
        "Saldo tidak mencukupi untuk melanjutkan ke MRT";
      return;
    }

    var tarifMRTTotal = tarifMRT[stasiunAwal][stasiunAkhir];
    var saldoAkhirMRT = saldoAkhirKRL - tarifMRTTotal;

    var hasilAkses = `Akses KRL & MRT diizinkan dengan tarif KRL ${tarifKRL} dan tarif MRT ${tarifMRTTotal}`;
    hasilAksesDiv.innerHTML = hasilAkses;

    // Saldo akhir total (KRL & MRT)
    var saldoAkhirTotal = saldo - tarifKRL - tarifMRTTotal;
    hasilAksesDiv.innerHTML +=
      "<br>Saldo akhir total (KRL & MRT): " + saldoAkhirTotal;
  }
  localStorage.setItem("saldoAkhir", saldoAkhir);
  displaySaldoTerakhir();
});

function displaySaldoTerakhir() {
  var saldoTerakhir = localStorage.getItem("saldoAkhir");
  var saldoTerakhirDiv = document.getElementById("saldoTerakhir");
  if (saldoTerakhir !== null) {
    saldoTerakhirDiv.innerHTML = "Saldo akhir yang tersimpan: " + saldoTerakhir;
  } else {
    saldoTerakhirDiv.innerHTML = "Belum ada saldo akhir yang tersimpan.";
  }
}
function populateStasiunOptions() {
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
  ]; // Add more if needed

  var stasiunAwalSelect = document.getElementById("stasiunAwal");
  var stasiunAkhirSelect = document.getElementById("stasiunAkhir");

  stasiunAwalSelect.innerHTML = "";
  stasiunAkhirSelect.innerHTML = "";

  stasiunOptions.forEach(function (stasiun) {
    var option = document.createElement("option");
    option.text = stasiun;
    stasiunAwalSelect.add(option);

    var option2 = document.createElement("option");
    option2.text = stasiun;
    stasiunAkhirSelect.add(option2);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  displaySaldoTerakhir();
});
