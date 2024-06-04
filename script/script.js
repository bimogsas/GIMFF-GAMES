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

// Options
let num1 = 23855;
let num2 = 44439;
let num3 = 35400;

const od = new Odometer({
  el: document.getElementById("odometer"),
  format: "(,ddd).dd",
  duration: 10,
  theme: "default"
});

od.render();

// Initial Animation
setTimeout(function () {
  od.update(num1);
}, 100);

const od1 = new Odometer({
  el: document.getElementById("odometer-revenue"),
  format: "(,ddd).dd",
  duration: 3000,
  theme: "default"
});

od1.render();
// Initial Animation
setTimeout(function () {
  od1.update(num2);
}, 100);

const od2 = new Odometer({
  el: document.getElementById("odometer-broadcast"),
  format: "(,ddd).dd",
  duration: 3000,
  theme: "default"
});

// Initial Animation
setTimeout(function () {
  od2.update(num3);
}, 100);

od2.render();

// Random Time = +Random Number
function randNumber() {
  num = num + Math.floor(1 + 100 * Math.random());
  od.update(num);
}

(function myFunction() {
  let randTime = Math.floor(Math.random() * (20 - 5 + 1) + 5);
  randNumber();
  setTimeout(myFunction, randTime * 100);
})();


