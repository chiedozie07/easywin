import { useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "../lib/utils";


// const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

const navItems: string[] = [
  "Casino",
  "Virtuals",
  "Copy bets",
  "Scratch & win",
  "Jackpot",
  "Lotto",
  "Live Score",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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

        {/* center - navigation */}
        <nav className="hidden md:flex space-x-6 ml-5">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={cn(
                "text-white font-medium hover:text-yellow-300 transition relative",
                item === "Scratch & win" && "text-yellow-300 font-bold"
              )}
            >
              {item}
              {item === "Scratch & win" && (
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-4 h-1 bg-yellow-300 rounded"></span>
              )}
            </a>
          ))}

        </nav>

        {/* right - profile icon */}
        <div className="w-8 h-8 bg-white text-green-500 rounded-full flex items-center justify-center ml-5 cursor-pointer">
          👤
        </div>
      </div>

      {/* mobile dropdown */}
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
