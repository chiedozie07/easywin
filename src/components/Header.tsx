import { useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";

const navItems: string[] = [
  // "Sports",
  // "Live",
  // "Aviator",
  "Casino",
  "Virtuals",
  "Copy bets",
  "Scratch & win",
  "Jackpot",
  "Lotto",
  "Live Score",
  "Trends"
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <header className="bg-green-500 text-white relative px-4 md:px-8 py-3 shadow-lg">
      <div className="flex items-center justify-between">
        {/* left - menu icon & logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full bg-white text-green-500"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold flex items-center">
            <span className="text-yellow-300">Easy</span>☀️
            <span className="text-white">Win</span>
          </h1>
        </div>

        {/* center - navigation (desktop) */}
        <nav className="hidden md:flex space-x-6 ml-5">
          {navItems.map((item) => (
            <a
              key={item}
              href={item[3] && typeof item[3] === "string" && item[3].includes("Scratch & win") ? "/games/luckyhome" : "#"}
              style={{ color: 'white' }}
              className={`text-white font-medium hover:text-yellow-300 transition relative 
                ${item === "Scratch & win" ? "text-yellow-300 font-bold" : ""}`}
            >
              {item}
              {item === "Scratch & win" && (
                <span className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-7 h-1 rounded 
                  ${item === "Scratch & win" && "bg-yellow-300 text-yellow-300"}`}>
                </span>
              )}
            </a>
          ))}
        </nav>
        {/* right - profile icon */}
        <div className="w-8 h-8 bg-white text-green-500 rounded-full flex items-center justify-center ml-5 cursor-pointer" onClick={() => navigate("/profile")}>
          👤
        </div>
      </div>

      {/* mobile navigation - scrollable */}
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex space-x-6 px-4 py-2 w-max">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={cn(
                "text-white font-medium hover:text-yellow-300 transition whitespace-nowrap",
                item === "Scratch & win" && "text-yellow-300 font-bold"
              )}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-green-600 text-white py-3 shadow-md">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block text-center py-2 hover:bg-green-700 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
