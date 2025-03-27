import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import luckyWorldCupBanner from "../assets/images/luckyworldcup_rk.png";

const symbols = ["✋", "⚽", "🏆", "⭐", "👑", "💰"];

const getRandomSymbols = () => {
  return Array.from({ length: 3 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
};

export default function LuckyWorldCupPage() {
  const [scratchPanel, setScratchPanel] = useState(getRandomSymbols);
  const [scratched, setScratched] = useState(false);
  const [winAmount, setWinAmount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const checkWin = useCallback((symbols) => {
    const counts = symbols.reduce((acc, symbol) => {
      acc[symbol] = (acc[symbol] || 0) + 1;
      return acc;
    }, {});

    if (Object.values(counts).some((count) => count === 3)) {
      setWinAmount(Math.floor(Math.random() * 2000) + 1000);
      setShowConfetti(true);
    } else if (Object.values(counts).some((count) => count === 2)) {
      setWinAmount(Math.floor(Math.random() * 500) + 200);
      setShowConfetti(true);
    } else {
      setWinAmount(0);
    }
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const handleScratch = () => {
    if (!scratched) {
      setScratched(true);
      checkWin(scratchPanel);
    }
  };

  const handleNewTicket = () => {
    setScratchPanel(getRandomSymbols());
    setScratched(false);
    setWinAmount(0);
    setShowConfetti(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-700 to-green-900 text-white p-6 w-full">
      <h1 className="text-lg font-bold mb-4">Lucky World Cup</h1>
      <div className="relative w-80 h-40 bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={handleScratch}>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          {!scratched ? (
            <motion.div className="text-xl text-gray-400" initial={{ scale: 0.8 }} animate={{ scale: 1.1 }}>
              Scratch Here
            </motion.div>
          ) : (
            <div className="flex flex-row gap-4">
              {scratchPanel.map((symbol, index) => (
                <motion.span key={index} className="text-4xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {symbol}
                </motion.span>
              ))}
            </div>
          )}
        </div>
        <img
          src={luckyWorldCupBanner}
          alt="Lucky World Cup"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        {showConfetti && <Confetti width={width} height={height} />}
      </div>
      {scratched && <h2 className="text-2xl font-semibold mt-4 text-yellow-400">You Won: ₦{winAmount}</h2>}
      <button
        style={{ backgroundColor: '#EC7325' }}
        onClick={handleNewTicket}
        className="mt-8 bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition w-full font-bold"
      >
        New Ticket
      </button>
    </div>
  );
}
