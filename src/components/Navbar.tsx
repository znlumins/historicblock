import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="w-full h-16 md:h-20 lg:h-[110px] bg-historic-brown dark:bg-gray-800 border-b-2 md:border-b-4 border-historic-brown-dark dark:border-gray-700 shadow-lg flex items-center px-4 md:px-8 lg:px-20 relative">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Merriweather:wght@400;700&family=Georgia:wght@400&display=swap"
        />

        {/* Left side - Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={closeMobileMenu}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/507170e63ed72fa0abf94c821deabb0a1109b706?placeholderIfAbsent=true"
              alt="HISTORIC BLOCK"
              className="w-[50px] h-[50px] md:w-[62px] md:h-[62px] hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on mobile/tablet */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/"
            className={`font-quicksand text-base transition-colors ${
              isActive("/")
                ? "text-historic-yellow-light font-bold"
                : "text-white hover:text-historic-yellow-light"
            }`}
          >
            Beranda
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                to="/kuis"
                className={`font-quicksand text-base transition-colors ${
                  isActive("/kuis")
                    ? "text-historic-yellow-light font-bold"
                    : "text-white hover:text-historic-yellow-light"
                }`}
              >
                Kuis
              </Link>
              <Link
                to="/leaderboard"
                className={`font-quicksand text-base transition-colors ${
                  isActive("/leaderboard")
                    ? "text-historic-yellow-light font-bold"
                    : "text-white hover:text-historic-yellow-light"
                }`}
              >
                Leaderboard
              </Link>
              <Link
                to="/tutorial"
                className={`font-quicksand text-base transition-colors ${
                  isActive("/tutorial")
                    ? "text-historic-yellow-light font-bold"
                    : "text-white hover:text-historic-yellow-light"
                }`}
              >
                Tutorial Gameplay
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/tutorial"
                className={`font-quicksand text-base transition-colors ${
                  isActive("/tutorial")
                    ? "text-historic-yellow-light font-bold"
                    : "text-white hover:text-historic-yellow-light"
                }`}
              >
                Tutorial Gameplay
              </Link>
              <Link
                to="/login"
                className={`font-quicksand text-base transition-colors ${
                  isActive("/leaderboard")
                    ? "text-historic-yellow-light font-bold"
                    : "text-white hover:text-historic-yellow-light"
                }`}
              >
                Leaderboard
              </Link>
            </>
          )}
        </nav>

        {/* Right side - Auth Actions (Desktop) and Mobile Menu Button */}
        <div className="flex items-center ml-auto gap-4">
          {/* Desktop Auth Actions - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {isAuthenticated && user ? (
              <UserDropdown userName={user.name} userLevel={user.level} />
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="font-quicksand text-white hover:text-historic-yellow-light transition-colors"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-historic-yellow to-historic-orange hover:from-historic-orange hover:to-historic-yellow text-white font-quicksand px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Daftar
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-historic-yellow-light transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={closeMobileMenu}
        >
          <div
            className="bg-historic-brown dark:bg-gray-800 w-full max-w-sm h-full shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="p-4 border-b border-historic-brown-dark">
              <div className="flex items-center justify-between mb-4">
                <Link to="/" onClick={closeMobileMenu}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/507170e63ed72fa0abf94c821deabb0a1109b706?placeholderIfAbsent=true"
                    alt="HISTORIC BLOCK"
                    className="w-[40px] h-[40px]"
                  />
                </Link>
                <button
                  onClick={closeMobileMenu}
                  className="text-white hover:text-historic-yellow-light transition-colors p-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* User Profile Info in Mobile Menu */}
              {isAuthenticated && user && (
                <div className="flex items-center gap-3 bg-historic-brown-dark rounded-lg p-3">
                  <div className="w-12 h-12 bg-historic-yellow rounded-full flex items-center justify-center">
                    <span className="font-quicksand font-bold text-historic-brown-dark text-lg">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-quicksand font-bold text-white text-sm">
                      {user.name}
                    </div>
                    <div className="font-quicksand text-historic-yellow-light text-xs">
                      {user.level}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Content */}
            <nav className="p-4 space-y-4">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`block font-quicksand text-lg py-3 px-4 rounded-lg transition-colors ${
                  isActive("/")
                    ? "bg-historic-yellow text-historic-brown-dark font-bold"
                    : "text-white hover:bg-historic-brown-dark"
                }`}
              >
                🏠 Beranda
              </Link>

              {isAuthenticated ? (
                <>
                  <Link
                    to="/kuis"
                    onClick={closeMobileMenu}
                    className={`block font-quicksand text-lg py-3 px-4 rounded-lg transition-colors ${
                      isActive("/kuis")
                        ? "bg-historic-yellow text-historic-brown-dark font-bold"
                        : "text-white hover:bg-historic-brown-dark"
                    }`}
                  >
                    🎯 Kuis
                  </Link>
                  <Link
                    to="/leaderboard"
                    onClick={closeMobileMenu}
                    className={`block font-quicksand text-lg py-3 px-4 rounded-lg transition-colors ${
                      isActive("/leaderboard")
                        ? "bg-historic-yellow text-historic-brown-dark font-bold"
                        : "text-white hover:bg-historic-brown-dark"
                    }`}
                  >
                    🏆 Leaderboard
                  </Link>
                  <Link
                    to="/tutorial"
                    onClick={closeMobileMenu}
                    className={`block font-quicksand text-lg py-3 px-4 rounded-lg transition-colors ${
                      isActive("/tutorial")
                        ? "bg-historic-yellow text-historic-brown-dark font-bold"
                        : "text-white hover:bg-historic-brown-dark"
                    }`}
                  >
                    📖 Tutorial Gameplay
                  </Link>

                  {/* Mobile Menu Divider */}
                  <div className="border-t border-historic-brown-dark my-4"></div>

                  {/* User Menu Items for Mobile */}
                  <Link
                    to="/profile"
                    onClick={closeMobileMenu}
                    className="block font-quicksand text-lg py-3 px-4 rounded-lg text-white hover:bg-historic-brown-dark transition-colors"
                  >
                    👤 Profil Saya
                  </Link>
                  <Link
                    to="/stats"
                    onClick={closeMobileMenu}
                    className="block font-quicksand text-lg py-3 px-4 rounded-lg text-white hover:bg-historic-brown-dark transition-colors"
                  >
                    📊 Statistik
                  </Link>
                  <Link
                    to="/achievements"
                    onClick={closeMobileMenu}
                    className="block font-quicksand text-lg py-3 px-4 rounded-lg text-white hover:bg-historic-brown-dark transition-colors"
                  >
                    🏆 Achievement
                  </Link>
                  <Link
                    to="/settings"
                    onClick={closeMobileMenu}
                    className="block font-quicksand text-lg py-3 px-4 rounded-lg text-white hover:bg-historic-brown-dark transition-colors"
                  >
                    ⚙️ Pengaturan
                  </Link>

                  {/* Admin Menu for Mobile */}
                  {user?.role === "admin" && (
                    <>
                      <div className="border-t border-historic-brown-dark my-4"></div>
                      <Link
                        to="/admin"
                        onClick={closeMobileMenu}
                        className="block font-quicksand text-lg py-3 px-4 rounded-lg bg-historic-cream text-historic-brown-dark hover:bg-historic-yellow transition-colors font-semibold"
                      >
                        🛠️ Admin Dashboard
                      </Link>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Link
                    to="/tutorial"
                    onClick={closeMobileMenu}
                    className={`block font-quicksand text-lg py-3 px-4 rounded-lg transition-colors ${
                      isActive("/tutorial")
                        ? "bg-historic-yellow text-historic-brown-dark font-bold"
                        : "text-white hover:bg-historic-brown-dark"
                    }`}
                  >
                    📖 Tutorial Gameplay
                  </Link>
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    className="block font-quicksand text-lg py-3 px-4 rounded-lg text-white hover:bg-historic-brown-dark transition-colors"
                  >
                    🏆 Leaderboard
                  </Link>

                  {/* Mobile Auth Actions */}
                  <div className="border-t border-historic-brown-dark my-4"></div>

                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    className="block font-quicksand text-lg py-3 px-4 rounded-lg text-white hover:bg-historic-brown-dark transition-colors"
                  >
                    🚪 Masuk
                  </Link>
                  <Link
                    to="/register"
                    onClick={closeMobileMenu}
                    className="block font-quicksand text-lg py-3 px-4 rounded-lg bg-gradient-to-r from-historic-yellow to-historic-orange text-white hover:from-historic-orange hover:to-historic-yellow transition-all duration-200 shadow-lg"
                  >
                    ✨ Daftar
                  </Link>
                </>
              )}
            </nav>

            {/* Mobile Menu Footer */}
            {isAuthenticated && (
              <div className="absolute bottom-4 left-4 right-4">
                <button
                  onClick={() => {
                    closeMobileMenu();
                    logout();
                  }}
                  className="w-full font-quicksand text-lg py-3 px-4 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  🚪 Keluar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
