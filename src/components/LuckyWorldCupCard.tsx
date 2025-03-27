import { useNavigate } from "react-router-dom";
import luckyWorldCupBanner from "../assets/images/luckyworldcup_rk.png";


const LuckyWorldCupCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col items-center rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300 mt-10 w-1/2"
      onClick={() => navigate("/Games/LuckyWorldCup")}
    >
      {/* game banner */}
      <div className="w-full relative rounded-lg overflow-hidden">
        <img src={luckyWorldCupBanner} alt="Lucky World Cup" className="w-full h-auto" loading="lazy" width={500} height={400} />
        {/* new tag */}
        <span className="absolute top-2 right-2 bg-green-400 text-white text-xs font-bold px-2 py-1 rounded-xs shadow-md">
          NEW
        </span>
      </div>
      {/* game title */}
      <h3 className="text-gray-300 text-sm font-bold my-3">Lucky World Cup</h3>

      {/* price button */}
      <button style={{backgroundColor: '#15BB50'}} className="bg-green-600 text-white font-medium px-4 py-2 rounded-lg mt-2 hover:bg-green-700 w-full">
      <span>💰</span> ₦500
      </button>
    </div>
  );
};

export default LuckyWorldCupCard;
