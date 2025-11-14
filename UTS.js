window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  if (!nama) return alert("Masukkan nama anda.");
  if (!email) return alert("Masukkan email anda.");
  if (!pesan) return alert("Masukkan pesan anda.");
  alert("Terima kasih, Pesan anda sudah disampaikan ke Mr.EW!");
  form.reset();
});

function tampilkanJam() {
  const waktu = new Date();
  const jam = waktu.getHours().toString().padStart(2, "0");
  const menit = waktu.getMinutes().toString().padStart(2, "0");
  const detik = waktu.getSeconds().toString().padStart(2, "0");
  document.getElementById("jamSekarang").textContent = `${jam}:${menit}:${detik}`;
}
setInterval(tampilkanJam, 1000);
 
const btnWarna = document.getElementById("btnWarna");
const logoMode = document.getElementById("logoMode");
const body = document.body;
let darkMode = localStorage.getItem("darkMode") === "true";

function applyMode() {
  if (darkMode) {
    body.classList.add("dark-mode");
    logoMode.textContent = "🌙"; 
  } else {
    body.classList.remove("dark-mode");
    logoMode.textContent = "☀️"; 
  }
}
applyMode();
btnWarna.addEventListener("click", (e) => {
  e.preventDefault();
  darkMode = !darkMode;
  localStorage.setItem("darkMode", darkMode);
  applyMode();
});
const tglSekarang = new Date();

  // Format tanggal Indonesia (contohnya: 13 November 2025)
  const opsiFormat = { day: 'numeric', month: 'long', year: 'numeric' };
  const tanggalFormat = tglSekarang.toLocaleDateString('id-ID', opsiFormat);

  // Tampilkan di elemen HTML
  document.getElementById("tanggal").innerHTML = tanggalFormat;