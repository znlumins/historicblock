import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface UserDropdownProps {
  userName: string;
  userLevel: string;
}

const UserDropdown = ({ userName, userLevel }: UserDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { logout, user } = useAuth();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { icon: "👤", label: "Profil Saya", href: "/profile" },
    { icon: "📊", label: "Statistik", href: "/stats" },
    { icon: "🏆", label: "Achievement", href: "/achievements" },
    { icon: "⚙️", label: "Pengaturan", href: "/settings" },
  ];

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-historic-yellow to-historic-orange rounded-md border-0 w-52 h-10 relative hover:from-historic-orange hover:to-historic-yellow transition-all duration-200"
      >
        <div className="absolute left-2 top-2 flex items-center gap-1.5">
          {/* Crown Icon */}
          <div className="w-[18px] h-[18px] bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_27_3435)">
                <path
                  d="M5.41839 1.68597C5.58737 1.58221 5.70002 1.39396 5.70002 1.18199C5.70002 0.854406 5.43469 0.589077 5.10711 0.589077C4.77952 0.589077 4.5142 0.854406 4.5142 1.18199C4.5142 1.39544 4.62685 1.58221 4.79583 1.68597L3.94648 3.38466C3.81159 3.65444 3.46177 3.73152 3.22609 3.54327L1.90538 2.4864C1.97949 2.38709 2.02396 2.26406 2.02396 2.13065C2.02396 1.80307 1.75863 1.53774 1.43105 1.53774C1.10346 1.53774 0.838135 1.80307 0.838135 2.13065C0.838135 2.45824 1.10346 2.72356 1.43105 2.72356C1.43401 2.72356 1.43846 2.72356 1.44142 2.72356L2.11883 6.45002C2.20035 6.90064 2.59316 7.2297 3.05266 7.2297H7.16155C7.61958 7.2297 8.01238 6.90212 8.09539 6.45002L8.77279 2.72356C8.77576 2.72356 8.7802 2.72356 8.78317 2.72356C9.11075 2.72356 9.37608 2.45824 9.37608 2.13065C9.37608 1.80307 9.11075 1.53774 8.78317 1.53774C8.45558 1.53774 8.19026 1.80307 8.19026 2.13065C8.19026 2.26406 8.23472 2.38709 8.30884 2.4864L6.98812 3.54327C6.75244 3.73152 6.40262 3.65444 6.26774 3.38466L5.41839 1.68597Z"
                  fill="#FEF08A"
                />
              </g>
              <defs>
                <clipPath id="clip0_27_3435">
                  <path
                    d="M0.838135 0.11478H9.37608V7.70407H0.838135V0.11478Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* User Info */}
          <div className="flex flex-col">
            <div className="text-white font-quicksand font-bold text-[6.83px] leading-none">
              {userName}
            </div>
            <div className="text-historic-yellow-light font-quicksand text-[6.071px] leading-none mt-0.5">
              {userLevel}
            </div>
          </div>
        </div>

        {/* Dropdown Arrow */}
        <svg
          className={`absolute right-1 top-1/2 -translate-y-1/2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="24"
          height="24"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3137 16.9706L16.9706 22.6274L22.6274 16.9706"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {/* User Info Header */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="font-quicksand font-bold text-gray-800">
              {userName}
            </div>
            <div className="font-quicksand text-sm text-gray-600">
              {userLevel}
            </div>
          </div>

          {/* Menu Items */}
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-quicksand text-gray-700">{item.label}</span>
            </Link>
          ))}

          {/* Admin Menu (only for admin users) */}
          {user?.role === "admin" && (
            <>
              <div className="border-t border-gray-100 my-2"></div>
              <Link
                to="/admin"
                className="flex items-center gap-3 px-4 py-3 hover:bg-historic-cream transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg">🛠️</span>
                <span className="font-quicksand text-historic-brown font-semibold">
                  Admin Dashboard
                </span>
              </Link>
            </>
          )}

          {/* Separator */}
          <div className="border-t border-gray-100 my-2"></div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-red-50 transition-colors"
          >
            <span className="text-lg">🚪</span>
            <span className="font-quicksand text-red-600">Keluar</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
