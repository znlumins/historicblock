import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Profile = () => {
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
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="font-georgia text-4xl text-historic-brown-dark mb-2">
                Profil Pengguna
              </h1>
              <p className="font-merriweather text-gray-600">
                Kelola informasi akun dan preferensi Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Profile Info */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-historic-yellow to-historic-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👑</span>
                  </div>
                  <h2 className="font-quicksand text-2xl font-bold text-gray-800">
                    Daffa Ahmad Al Attas
                  </h2>
                  <p className="font-quicksand text-historic-brown">
                    Level 15 • Master
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block font-quicksand font-semibold text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value="daffa.ahmad@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg font-quicksand"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block font-quicksand font-semibold text-gray-700 mb-1">
                      Bergabung Sejak
                    </label>
                    <input
                      type="text"
                      value="15 Januari 2024"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg font-quicksand bg-gray-50"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="space-y-6">
                <h3 className="font-quicksand text-xl font-bold text-gray-800">
                  Statistik Pembelajaran
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-historic-cream rounded-lg p-4 text-center">
                    <div className="font-quicksand text-2xl font-bold text-historic-brown-dark">
                      47
                    </div>
                    <div className="font-quicksand text-sm text-gray-600">
                      Kuis Selesai
                    </div>
                  </div>
                  <div className="bg-historic-cream rounded-lg p-4 text-center">
                    <div className="font-quicksand text-2xl font-bold text-historic-brown-dark">
                      2,450
                    </div>
                    <div className="font-quicksand text-sm text-gray-600">
                      Total Poin
                    </div>
                  </div>
                  <div className="bg-historic-cream rounded-lg p-4 text-center">
                    <div className="font-quicksand text-2xl font-bold text-historic-brown-dark">
                      12
                    </div>
                    <div className="font-quicksand text-sm text-gray-600">
                      Achievement
                    </div>
                  </div>
                  <div className="bg-historic-cream rounded-lg p-4 text-center">
                    <div className="font-quicksand text-2xl font-bold text-historic-brown-dark">
                      #1
                    </div>
                    <div className="font-quicksand text-sm text-gray-600">
                      Ranking
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-historic-brown-dark text-white py-3 rounded-lg font-quicksand hover:bg-historic-brown transition-colors">
                    Edit Profil
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

export default Profile;
