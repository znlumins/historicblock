import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full h-[110px] bg-historic-brown border-b-4 border-historic-brown-dark shadow-lg flex items-center px-20 relative">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Merriweather:wght@400;700&family=Georgia:wght@400&display=swap"
      />

      {/* Left side - Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/507170e63ed72fa0abf94c821deabb0a1109b706?placeholderIfAbsent=true"
            alt="HISTORIC BLOCK"
            className="w-[62px] h-[62px] hover:scale-105 transition-transform"
          />
        </Link>
      </div>

      {/* Center - Navigation */}
      <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
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
              Tutorial
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
          </>
        )}
      </nav>

      {/* Right side - Auth Actions */}
      <div className="flex items-center ml-auto">
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
    </header>
  );
};

export default Navbar;
