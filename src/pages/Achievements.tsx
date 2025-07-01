import { Link } from "react-router-dom";
import UserDropdown from "@/components/UserDropdown";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "First Quiz Master",
      description: "Selesaikan kuis pertama Anda",
      icon: "🎯",
      earned: true,
      progress: 100,
      date: "15 Jan 2024",
    },
    {
      id: 2,
      title: "Kemerdekaan Expert",
      description: "Jawab 10 soal tentang kemerdekaan dengan benar",
      icon: "🇮🇩",
      earned: true,
      progress: 100,
      date: "18 Jan 2024",
    },
    {
      id: 3,
      title: "History Streak",
      description: "Mainkan kuis 7 hari berturut-turut",
      icon: "🔥",
      earned: true,
      progress: 100,
      date: "25 Jan 2024",
    },
    {
      id: 4,
      title: "Perfect Score",
      description: "Dapatkan skor 100% dalam satu kuis",
      icon: "⭐",
      earned: true,
      progress: 100,
      date: "28 Jan 2024",
    },
    {
      id: 5,
      title: "Quiz Champion",
      description: "Selesaikan 25 kuis dengan skor rata-rata >80%",
      icon: "🏆",
      earned: true,
      progress: 100,
      date: "5 Feb 2024",
    },
    {
      id: 6,
      title: "Knowledge Collector",
      description: "Kumpulkan 2000 poin",
      icon: "💎",
      earned: true,
      progress: 100,
      date: "12 Feb 2024",
    },
    {
      id: 7,
      title: "Speed Learner",
      description: "Selesaikan kuis dalam waktu kurang dari 5 menit",
      icon: "⚡",
      earned: false,
      progress: 80,
      date: null,
    },
    {
      id: 8,
      title: "Master Historian",
      description: "Capai level 20",
      icon: "📚",
      earned: false,
      progress: 75,
      date: null,
    },
    {
      id: 9,
      title: "Leaderboard King",
      description: "Berada di posisi #1 selama 30 hari",
      icon: "👑",
      earned: false,
      progress: 60,
      date: null,
    },
  ];

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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-georgia text-4xl text-historic-brown-dark mb-2">
              🏅 Achievement
            </h1>
            <p className="font-merriweather text-gray-600">
              Kumpulkan semua prestasi dalam perjalanan belajar sejarah Anda
            </p>
          </div>

          {/* Progress Summary */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-quicksand text-xl font-bold text-gray-800">
                  Progress Achievement
                </h2>
                <p className="text-gray-600">
                  6 dari 9 achievement telah dibuka
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-historic-brown-dark">
                  67%
                </div>
                <div className="text-sm text-gray-600">Selesai</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
              <div
                className="bg-gradient-to-r from-historic-yellow to-historic-orange h-3 rounded-full"
                style={{ width: "67%" }}
              ></div>
            </div>
          </div>

          {/* Achievement Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`bg-white rounded-xl p-6 shadow-lg transition-all hover:scale-105 ${
                  achievement.earned
                    ? "border-2 border-historic-yellow"
                    : "border border-gray-200 opacity-75"
                }`}
              >
                <div className="text-center">
                  <div
                    className={`text-4xl mb-3 ${
                      achievement.earned ? "" : "grayscale"
                    }`}
                  >
                    {achievement.icon}
                  </div>
                  <h3 className="font-quicksand font-bold text-lg text-gray-800 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {achievement.description}
                  </p>

                  {achievement.earned ? (
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-quicksand">
                      Selesai • {achievement.date}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-historic-brown h-2 rounded-full"
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {achievement.progress}% selesai
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-md mx-auto">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-quicksand text-xl font-bold text-gray-800 mb-2">
                Raih Achievement Lebih Banyak!
              </h3>
              <p className="text-gray-600 mb-4">
                Terus berlatih untuk membuka semua achievement
              </p>
              <Link
                to="/kuis"
                className="inline-block bg-historic-brown-dark text-white px-6 py-3 rounded-lg font-quicksand hover:bg-historic-brown transition-colors"
              >
                Mulai Kuis
              </Link>
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

export default Achievements;
