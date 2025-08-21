
import { useState } from 'react'

// Fungsi untuk mengecek kekuatan password
function checkStrength(password) {
  let score = 0;
  // Cek panjang minimal 8 karakter
  if (password.length >= 8) score++;
  // Cek huruf besar & kecil
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  // Cek angka
  if (/[0-9]/.test(password)) score++;
  // Cek simbol
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}

function getStrengthLabel(score) {
  if (score <= 1) return { label: 'Lemah', color: 'bg-red-500', text: 'text-red-600' };
  if (score === 2 || score === 3) return { label: 'Sedang', color: 'bg-orange-400', text: 'text-orange-500' };
  if (score === 4) return { label: 'Kuat', color: 'bg-green-500', text: 'text-green-600' };
  return { label: '', color: '', text: '' };
}

function App() {
  // State untuk menyimpan password
  const [password, setPassword] = useState('');
  // Hitung skor kekuatan password
  const score = checkStrength(password);
  // Dapatkan label dan warna berdasarkan skor
  const { label, color, text } = getStrengthLabel(score);

  // Persentase progress bar
  const percent = (score / 4) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Container utama */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center mb-4">Password Strength Checker</h2>
        {/* Input password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Masukkan Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password..."
          />
        </div>
        {/* Indikator kekuatan password */}
        <div className="mt-4">
          <span className={`font-semibold ${text}`}>Kekuatan: {label || '-'}</span>
          {/* Progress bar visual */}
          <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
            <div
              className={`h-3 rounded-full transition-all duration-300 ${color}`}
              style={{ width: `${percent}%` }}
            ></div>
          </div>
        </div>
        {/* Penjelasan kriteria */}
        <ul className="text-xs text-gray-500 mt-4 space-y-1">
          <li>• Minimal 8 karakter</li>
          <li>• Ada huruf besar & kecil</li>
          <li>• Ada angka</li>
          <li>• Ada simbol</li>
        </ul>
        {/* Komentar: Desain responsif & modern dengan Tailwind CSS */}
      </div>
    </div>
  );
}

export default App
