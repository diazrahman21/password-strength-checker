# Password Strength Checker

Aplikasi web sederhana untuk memeriksa kekuatan password secara real-time menggunakan React dan Vite.

![Password Strength Checker Screenshot](/src/assets/ss.jpg)

## Fitur

- Input field untuk memasukkan password
- Indikator kekuatan password (lemah, sedang, kuat) secara real-time
- Progress bar visual yang menunjukkan kekuatan password
- Kriteria kekuatan password:
  - Panjang minimal 8 karakter
  - Mengandung huruf besar dan kecil
  - Mengandung angka
  - Mengandung simbol/karakter khusus
- Desain responsif dan modern

## Cara Penggunaan

1. Buka aplikasi di browser
2. Masukkan password di kolom input
3. Perhatikan indikator kekuatan password yang berubah secara real-time:
   - **Merah** = Lemah (memenuhi 0-1 kriteria)
   - **Oranye** = Sedang (memenuhi 2-3 kriteria)
   - **Hijau** = Kuat (memenuhi semua kriteria)
4. Lihat progress bar yang menunjukkan persentase kekuatan password

## Teknologi yang Digunakan

- **React** - Library JavaScript untuk membangun antarmuka pengguna
- **Vite** - Build tool yang cepat untuk aplikasi web modern
- **CSS** - Untuk styling dan desain responsif

## Cara Menjalankan Proyek

1. Pastikan Anda memiliki [Node.js](https://nodejs.org/) terinstal
2. Clone repositori ini
   ```
   git clone https://github.com/diazrahman21/password-strength-checker.git
   ```
3. Masuk ke direktori proyek
   ```
   cd password-strength-checker
   ```
4. Instal dependensi
   ```
   npm install
   ```
5. Jalankan server development
   ```
   npm run dev
   ```
6. Buka http://localhost:5173 di browser Anda (atau port lain yang ditampilkan di terminal)

## Membangun untuk Produksi

Untuk membangun aplikasi untuk produksi:

```
npm run build
```

File-file hasil build akan tersedia di direktori `dist/`

## Lisensi

[MIT](LICENSE)

---

Dibuat oleh Diaz Rahman | Portfolio Project
