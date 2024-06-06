// Ambil semua elemen kartu yang memiliki kelas 'video-card'
const videoCards = document.querySelectorAll('.video-card');

// Loop melalui setiap elemen kartu
videoCards.forEach(card => {
  // Ambil video dari kartu saat ini
  const video = card.querySelector('video');

  // Ketika mouse masuk ke kartu
  card.addEventListener('mouseenter', () => {
    // Tampilkan video dan mulai putar
    showVideo(video.id);
  });

  // Ketika mouse meninggalkan kartu
  card.addEventListener('mouseleave', () => {
    // Sembunyikan video dan jeda
    hideVideo(video.id);
  });
});

// Fungsi untuk menampilkan video
function showVideo(videoId) {
  var video = document.getElementById(videoId);
  if (video) {
    video.style.display = "block";
    video.play();
  }
}

// Fungsi untuk menyembunyikan video
function hideVideo(videoId) {
  var video = document.getElementById(videoId);
  if (video) {
    video.style.display = "none";
    video.pause();
  }
}

// Inisialisasi nilai awal
let num = 445;
const num2 = 394;
const num3 = 330;

// Membuat instansi Odometer
const od = new Odometer({
  el: document.getElementById("odometer"),
  format: "(,ddd).dd",
  duration: 10,
  theme: "default"
});

od.render();

// Animasi awal
setTimeout(function () {
  od.update(num);
}, 30);

// Membuat fungsi untuk mengubah nomor secara acak
function randNumber() {
  num = num + Math.floor(1 + 10 * Math.random());
  od.update(num);
}

// Mengatur interval untuk memanggil randNumber
(function myFunction() {
  let randTime = Math.floor(Math.random() * (20 - 5 + 1) + 5);
  randNumber();
  setTimeout(myFunction, randTime * 100);
})();

// Penanganan kesalahan jika elemen HTML tidak ditemukan
const od1Element = document.getElementById("odometer-revenue");
if (od1Element) {
  const od1 = new Odometer({
    el: od1Element,
    format: "(,ddd).dd",
    duration: 3000,
    theme: "default"
  });

  od1.render();

  setTimeout(function () {
    od1.update(num2);
  }, 100);
} else {
  console.error("Element with ID 'odometer-revenue' not found.");
}

// Penanganan kesalahan jika elemen HTML tidak ditemukan
const od2Element = document.getElementById("odometer-broadcast");
if (od2Element) {
  const od2 = new Odometer({
    el: od2Element,
    format: "(,ddd).dd",
    duration: 500,
    theme: "default"
  });

  od2.render();

  setTimeout(function () {
    od2.update(num3);
  }, 100);
} else {
  console.error("Element with ID 'odometer-broadcast' not found.");
}


// Data pendapatan harian dan pesan harian
const dailyIncomeData = [533, 746, 647, 895]; // Contoh: Data pendapatan harian
const dailyMessageData = [43, 56 ,85 , 66]; // Contoh: Data pesan harian

// Inisialisasi indeks untuk pendapatan harian dan pesan harian
let incomeIndex = 0;
let messageIndex = 0;

// Fungsi untuk memperbarui pendapatan harian
function updateDailyIncome() {
  const incomeOdometer = document.getElementById("odometer-revenue");
  incomeOdometer.innerHTML = dailyIncomeData[incomeIndex];

  incomeIndex = (incomeIndex + 1) % dailyIncomeData.length;
}

// Fungsi untuk memperbarui pesan harian
function updateDailyMessage() {
  const messageElement = document.getElementById("odometer-broadcast");
  messageElement.innerHTML = dailyMessageData[messageIndex];

  messageIndex = (messageIndex + 1) % dailyMessageData.length;
}

// Memperbarui pendapatan harian dan pesan harian pertama kali
updateDailyIncome();
updateDailyMessage();

// Memperbarui pendapatan harian dan pesan harian setiap beberapa detik
setInterval(function() {
  updateDailyIncome();
  updateDailyMessage();
}, 5000); // Setiap 5 detik (5000 milidetik)



document.addEventListener("DOMContentLoaded", function(event) {
  feather.replace();
});

document.addEventListener("DOMContentLoaded", function() {
  const chatIcon = document.querySelector('.chat-icon');
  const chatBox = document.querySelector('.chat-box');

  // Fungsi untuk membuka atau menutup chat box
  function toggleChatBox() {
    chatBox.classList.toggle('show');
  }

  // Ketika ikon chat diklik, toggle chat box dan kirim pesan ke WhatsApp
  chatIcon.addEventListener('click', function() {
    toggleChatBox();
    // Ganti nomor WA dan pesan sesuai kebutuhan Anda
    const phoneNumber = '6282298822517'; // Ganti dengan nomor WhatsApp tujuan
    const message = encodeURIComponent('Halo, saya tertarik dengan layanan Anda.'); // Ganti pesan sesuai kebutuhan, dan kode ini akan memformat pesan untuk URL
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  });
});
