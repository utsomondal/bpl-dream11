import { TbCoinTakaFilled } from "react-icons/tb";

const Player = ({ player, handleChoosePlayer }) => {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    player;
  return (
    <div className="border border-gray-300 rounded-xl p-5 space-y-2 shadow-md my-5">
      <img
        src={image}
        alt={`${name}player image`}
        className="rounded-xl h-[300px] w-full"
      />
      <h1 className="text-2xl font-semibold">{name}</h1>
      <div className="flex justify-between items-center">
        <p className="text-gray-500">{country}</p>
        <p>{role}</p>
      </div>
      <hr className="text-gray-300" />
      <h2 className="font-bold">Rating</h2>
      <div className="flex justify-between items-center">
        <p>{battingType}</p>
        <p className="text-gray-500">{bowlingType}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <p className="font-bold">Price: {biddingPrice}</p>
          <TbCoinTakaFilled className="text-lg text-[#E9AD03]"></TbCoinTakaFilled>
        </div>
        <button
          onClick={() => handleChoosePlayer(player)}
          className="border border-gray-300 px-4 py-2 font-medium rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 active:scale-90"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Player;
