import { Link } from "react-router-dom";
import UserDropdown from "@/components/UserDropdown";

const Settings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white border-2 border-[#ced4da] rounded-lg">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Merriweather:wght@400;700&family=Georgia:wght@400&display=swap"
      />

      {/* Header */}
      <header className="w-full h-[110px] bg-historic-brown border-b-4 border-historic-brown-dark shadow-lg flex items-center px-20 relative">
        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/507170e63ed72fa0abf94c821deabb0a1109b706?placeholderIfAbsent=true"
            alt="HISTORIC BLOCK"
            className="w-[62px] h-[62px]"
          />
        </div>

        <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/"
            className="text-white font-quicksand text-base hover:text-historic-yellow-light transition-colors"
          >
            Beranda
          </Link>
          <Link
            to="/kuis"
            className="text-white font-quicksand text-base hover:text-historic-yellow-light transition-colors"
          >
            Kuis
          </Link>
          <Link
            to="/leaderboard"
            className="text-white font-quicksand text-base hover:text-historic-yellow-light transition-colors"
          >
            Leaderboard
          </Link>
          <Link
            to="/tutorial"
            className="text-white font-quicksand text-base hover:text-historic-yellow-light transition-colors"
          >
            Tutorial Gameplay
          </Link>
        </nav>

        <div className="flex items-center ml-auto">
          <UserDropdown
            userName="Daffa Ahmad Al Attas"
            userLevel="Level 15 • Master"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-r from-historic-cream-light to-historic-cream py-20 px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-georgia text-4xl text-historic-brown-dark mb-2">
              ⚙️ Pengaturan
            </h1>
            <p className="font-merriweather text-gray-600">
              Kelola preferensi dan pengaturan akun Anda
            </p>
          </div>

          <div className="space-y-6">
            {/* Account Settings */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="font-quicksand text-xl font-bold text-gray-800 mb-4">
                👤 Pengaturan Akun
              </h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-quicksand font-semibold text-gray-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      value="Daffa Ahmad Al Attas"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg font-quicksand"
                    />
                  </div>
                  <div>
                    <label className="block font-quicksand font-semibold text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value="daffa.ahmad@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg font-quicksand"
                    />
                  </div>
                </div>
                <button className="bg-historic-brown text-white px-6 py-2 rounded-lg font-quicksand hover:bg-historic-brown-dark transition-colors">
                  Simpan Perubahan
                </button>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="font-quicksand text-xl font-bold text-gray-800 mb-4">
                🔒 Privasi & Keamanan
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-quicksand font-semibold">
                      Tampilkan nama di leaderboard
                    </div>
                    <div className="text-sm text-gray-600">
                      Nama Anda akan terlihat di papan peringkat
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="showName"
                      defaultChecked
                      className="sr-only"
                    />
                    <label
                      htmlFor="showName"
                      className="flex items-center cursor-pointer"
                    >
                      <div className="w-10 h-6 bg-historic-brown rounded-full shadow-inner">
                        <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-5 translate-y-1"></div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-quicksand font-semibold">
                      Profil publik
                    </div>
                    <div className="text-sm text-gray-600">
                      Pemain lain dapat melihat statistik Anda
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="publicProfile"
                      defaultChecked
                      className="sr-only"
                    />
                    <label
                      htmlFor="publicProfile"
                      className="flex items-center cursor-pointer"
                    >
                      <div className="w-10 h-6 bg-historic-brown rounded-full shadow-inner">
                        <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-5 translate-y-1"></div>
                      </div>
                    </label>
                  </div>
                </div>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-quicksand hover:bg-red-700 transition-colors">
                  Ganti Password
                </button>
              </div>
            </div>

            {/* Game Preferences */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="font-quicksand text-xl font-bold text-gray-800 mb-4">
                🎮 Preferensi Game
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-quicksand font-semibold">
                      Efek suara
                    </div>
                    <div className="text-sm text-gray-600">
                      Putar suara saat menjawab quiz
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="soundEffects"
                      defaultChecked
                      className="sr-only"
                    />
                    <label
                      htmlFor="soundEffects"
                      className="flex items-center cursor-pointer"
                    >
                      <div className="w-10 h-6 bg-historic-brown rounded-full shadow-inner">
                        <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-5 translate-y-1"></div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-quicksand font-semibold">
                      Mode gelap
                    </div>
                    <div className="text-sm text-gray-600">
                      Gunakan tema gelap untuk mata yang lebih nyaman
                    </div>
                  </div>
                  <div className="relative">
                    <input type="checkbox" id="darkMode" className="sr-only" />
                    <label
                      htmlFor="darkMode"
                      className="flex items-center cursor-pointer"
                    >
                      <div className="w-10 h-6 bg-gray-300 rounded-full shadow-inner">
                        <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-1 translate-y-1"></div>
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block font-quicksand font-semibold text-gray-700 mb-2">
                    Tingkat kesulitan default
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg font-quicksand">
                    <option>Mudah</option>
                    <option selected>Sedang</option>
                    <option>Sulit</option>
                    <option>Expert</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="font-quicksand text-xl font-bold text-gray-800 mb-4">
                🔔 Notifikasi
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-quicksand font-semibold">
                      Notifikasi quiz harian
                    </div>
                    <div className="text-sm text-gray-600">
                      Pengingat untuk mengerjakan quiz setiap hari
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="dailyQuiz"
                      defaultChecked
                      className="sr-only"
                    />
                    <label
                      htmlFor="dailyQuiz"
                      className="flex items-center cursor-pointer"
                    >
                      <div className="w-10 h-6 bg-historic-brown rounded-full shadow-inner">
                        <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-5 translate-y-1"></div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-quicksand font-semibold">
                      Update leaderboard
                    </div>
                    <div className="text-sm text-gray-600">
                      Pemberitahuan perubahan ranking
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="leaderboardUpdate"
                      defaultChecked
                      className="sr-only"
                    />
                    <label
                      htmlFor="leaderboardUpdate"
                      className="flex items-center cursor-pointer"
                    >
                      <div className="w-10 h-6 bg-historic-brown rounded-full shadow-inner">
                        <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-5 translate-y-1"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h2 className="font-quicksand text-xl font-bold text-red-700 mb-4">
                ⚠️ Zona Berbahaya
              </h2>
              <div className="space-y-3">
                <p className="text-red-600 font-quicksand">
                  Tindakan berikut tidak dapat dibatalkan
                </p>
                <div className="flex gap-3">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-quicksand hover:bg-red-700 transition-colors">
                    Reset Progress
                  </button>
                  <button className="bg-red-700 text-white px-4 py-2 rounded-lg font-quicksand hover:bg-red-800 transition-colors">
                    Hapus Akun
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-historic-brown border-t-4 border-historic-brown-dark py-9 px-36">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c339a674deb6423c5cd64cac74684504d5ed5944?placeholderIfAbsent=true"
            alt="HISTORIC BLOCK"
            className="w-[62px] h-[62px] mx-auto mb-4"
          />
          <p className="font-merriweather text-historic-cream-light">
            Belajar sejarah dengan cara yang menyenangkan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Settings;
