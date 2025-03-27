import { useState, useEffect, useCallback, useMemo } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import luckyWorldCupBanner from "../assets/images/luckyworldcup_rk.png";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import barrageIcon from "../assets/images/barrage-icon.png";
// import Slider from 'react-slick';


const symbols = ["✋", "⚽", "🏆", "⭐", "👑"];
const getRandomSymbols = () => {
  return Array.from({ length: 3 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
};

export default function LuckyWorldCupPage() {
  const [scratchPanel, setScratchPanel] = useState(getRandomSymbols);
  const [scratched, setScratched] = useState(false);
  const [winAmount, setWinAmount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [barrages, setBarrages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const { width, height } = useWindowSize();
  const [stakeAmount, setStakeAmount] = useState("500");


  // memoize prizeTable to prevent recreation on every render
  const prizeTable = useMemo(() => ({
    "🏆": 2000,
    "⭐": 50,
    "⚽": 10,
    "✋": 5,
    "👑": 1,
  }), []);

  const checkWin = useCallback((symbols) => {
    const counts = symbols.reduce((acc, symbol) => {
      acc[symbol] = (acc[symbol] || 0) + 1;
      return acc;
    }, {});

    let winnings = 0;

    for (const symbol in counts) {
      if (counts[symbol] === 3) {
        // triple match gets 2x prize
        winnings += prizeTable[symbol] * 2;
      } else if (counts[symbol] === 2) {
        // double match gets half prize
        winnings += prizeTable[symbol] * 0.5;
      }
    }
    // multiply winnings by the actual stake amount from state
    setWinAmount(winnings * Number(stakeAmount));
    setShowConfetti(winnings > 0);
  }, [prizeTable, stakeAmount]);

  //update show setShowConfetti state accordingly 
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 15000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const handleScratch = () => {
    if (!scratched) {
      setScratched(true);
      checkWin(scratchPanel);
    }
  };

  // handle the user game new ticket
  const handleNewTicket = () => {
    setScratchPanel(getRandomSymbols());
    setScratched(false);
    setWinAmount(0);
    setShowConfetti(false);
  };

  //handle barrage input data
  const handleAddBarrage = () => {
    if (inputValue.trim()) {
      setBarrages((prev) => [...prev, inputValue]);
      setInputValue("");
      setIsInputVisible(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-700 to-green-900 text-white p-6 w-full min-w-full">
      <h1 className="text-lg font-bold mb-10">Lucky World Cup</h1>
      <div className="relative w-80 h-40 bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={handleScratch}>
        {showConfetti && <Confetti width={width} height={height} />}
        {/* display barrages */}
        {barrages.length > 0 && (
          <Marquee gradient={false} speed={50} pauseOnHover>
            {barrages.map((text, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 text-gray-400 px-3 py-1 rounded-full text-xs mx-2 mt-3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {text}
              </motion.div>
            ))}
          </Marquee>
        )}
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
        {/* {showConfetti && <Confetti width={width} height={height} />} */}
      </div>
      {scratched && (
        <h2 className="text-2xl font-semibold mt-4 text-yellow-400">
          {winAmount > 0 ? `You Won: ₦${winAmount.toLocaleString()}` : "Lose, No Win 😢"}
        </h2>
      )}
      {/* next ticket and barrage button */}
      {!isInputVisible ? (
        <div className="flex flex-row justify-center items-center">
          <button
            style={{ backgroundColor: '#EC7325' }}
            onClick={handleNewTicket}
            className="mt-8 bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition w-full font-bold mr-3"
          >
            New Ticket
          </button>

          <button
            className="flex items-center justify-center gap-2 mt-8 py-2 px-4 bg-transparent text-gray-200 text-sm w-full rounded-lg shadow-md hover:bg-yellow-400 transition"
            onClick={() => setIsInputVisible(!isInputVisible)}
          >
            Input barrage
            <img src={barrageIcon} className="w-8 h-8" />
          </button>
        </div>
      ) : (
        <div className="flex gap-2 items-center mb-2 mt-10">
          {/* barrage input field */}
          <input
            type="text"
            placeholder="Enter barrage..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 h-full w-full p-2 border-1"
          />
          <button 
          // style={{backgroundColor: 'green'}} 
          className="text-gray-200 bg-green-500" onClick={handleAddBarrage}>Send</button>
        </div>
      )}

    </div>
  );
}
