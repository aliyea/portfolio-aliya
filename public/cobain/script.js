// Ambil semua elemen radio button dan body
const radios = document.querySelectorAll('input[name="viewMode"]');
const body = document.body;

// Saat web pertama kali dibuka, cek tombol mana yang aktif (defaultnya 'gothic' dari HTML kamu)
const defaultChecked = document.querySelector('input[name="viewMode"]:checked');
if (defaultChecked) {
  body.className = defaultChecked.value;
}

// Tambahkan event listener ke setiap tombol
radios.forEach(radio => {
  radio.addEventListener('change', (event) => {
    // Ganti class body sesuai value dari radio yang diklik
    body.className = event.target.value;
  });
});