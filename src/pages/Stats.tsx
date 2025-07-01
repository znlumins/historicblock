import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Stats = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white border-2 border-[#ced4da] rounded-lg">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Merriweather:wght@400;700&family=Georgia:wght@400&display=swap"
      />

      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-r from-historic-cream-light to-historic-cream py-20 px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-georgia text-4xl text-historic-brown-dark mb-2">
              Statistik Pembelajaran
            </h1>
            <p className="font-merriweather text-gray-600">
              Pantau progress dan pencapaian belajar sejarah Anda
            </p>
          </div>

          {/* Overview Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="font-quicksand text-2xl font-bold text-historic-brown-dark">
                #1
              </div>
              <div className="font-quicksand text-gray-600">Ranking Global</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-2">⭐</div>
              <div className="font-quicksand text-2xl font-bold text-historic-brown-dark">
                2,450
              </div>
              <div className="font-quicksand text-gray-600">Total Poin</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-2">📚</div>
              <div className="font-quicksand text-2xl font-bold text-historic-brown-dark">
                47
              </div>
              <div className="font-quicksand text-gray-600">Kuis Selesai</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-quicksand text-2xl font-bold text-historic-brown-dark">
                89%
              </div>
              <div className="font-quicksand text-gray-600">
                Akurasi Rata-rata
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Quiz History */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-quicksand text-xl font-bold text-gray-800 mb-4">
                📈 Riwayat Kuis Terakhir
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <div className="font-quicksand font-semibold">
                      Kemerdekaan RI
                    </div>
                    <div className="text-sm text-gray-600">2 jam yang lalu</div>
                  </div>
                  <div className="text-green-600 font-bold">95%</div>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-quicksand font-semibold">
                      Kerajaan Majapahit
                    </div>
                    <div className="text-sm text-gray-600">
                      1 hari yang lalu
                    </div>
                  </div>
                  <div className="text-blue-600 font-bold">87%</div>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <div className="font-quicksand font-semibold">
                      Perang Diponegoro
                    </div>
                    <div className="text-sm text-gray-600">
                      3 hari yang lalu
                    </div>
                  </div>
                  <div className="text-yellow-600 font-bold">92%</div>
                </div>
              </div>
            </div>

            {/* Achievement Progress */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-quicksand text-xl font-bold text-gray-800 mb-4">
                🏅 Progress Achievement
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-quicksand">Sejarah Indonesia</span>
                    <span className="text-sm text-gray-600">8/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-historic-brown h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-quicksand">Perang Dunia</span>
                    <span className="text-sm text-gray-600">6/8</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-historic-brown h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-quicksand">Kerajaan Nusantara</span>
                    <span className="text-sm text-gray-600">4/6</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-historic-brown h-2 rounded-full"
                      style={{ width: "67%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="bg-white rounded-xl p-6 shadow-lg mt-8">
            <h3 className="font-quicksand text-xl font-bold text-gray-800 mb-4">
              📊 Aktivitas Minggu Ini
            </h3>
            <div className="grid grid-cols-7 gap-2">
              {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map(
                (day, index) => (
                  <div key={day} className="text-center">
                    <div className="text-sm font-quicksand text-gray-600 mb-2">
                      {day}
                    </div>
                    <div
                      className={`w-full h-8 rounded ${
                        index < 5
                          ? "bg-historic-brown"
                          : index === 5
                            ? "bg-historic-brown opacity-50"
                            : "bg-gray-200"
                      }`}
                    ></div>
                    <div className="text-xs mt-1">
                      {index < 5 ? `${3 + index}` : index === 5 ? "1" : "-"}
                    </div>
                  </div>
                ),
              )}
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

export default Stats;
