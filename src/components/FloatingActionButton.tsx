import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const quickActions = [
    {
      icon: "🎯",
      label: "Quiz",
      href: "/kuis",
      color: "bg-historic-brown hover:bg-historic-brown-dark",
      show: isAuthenticated,
    },
    {
      icon: "🏆",
      label: "Leaderboard",
      href: "/leaderboard",
      color: "bg-yellow-600 hover:bg-yellow-700",
      show: true,
    },
    {
      icon: "📊",
      label: "Stats",
      href: "/stats",
      color: "bg-blue-600 hover:bg-blue-700",
      show: isAuthenticated,
    },
    {
      icon: "⚙️",
      label: "Settings",
      href: "/settings",
      color: "bg-gray-600 hover:bg-gray-700",
      show: isAuthenticated,
    },
  ];

  const visibleActions = quickActions.filter((action) => action.show);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Actions */}
      {isOpen && (
        <div className="flex flex-col gap-3 mb-4 animate-in slide-in-from-bottom-2 duration-200">
          {/* Quick Action Buttons */}
          {visibleActions.map((action, index) => (
            <Link
              key={index}
              to={action.href}
              onClick={() => setIsOpen(false)}
              className={`w-12 h-12 rounded-full ${action.color} text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group`}
              title={action.label}
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                {action.icon}
              </span>
            </Link>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-historic-brown hover:bg-historic-brown-dark text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        aria-label="Quick Actions"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
};

export default FloatingActionButton;
