import SelectedPlayer from "./SelectedPlayer";

const Selected = ({ selectedPlayers, handleTabChange, handleDeleteBtn }) => {
  return (
    <div className="my-5">
      {selectedPlayers.map((selectedPlayer) => (
        <SelectedPlayer
          key={selectedPlayer.playerId}
          selectedPlayer={selectedPlayer}
          handleDeleteBtn={handleDeleteBtn}
        ></SelectedPlayer>
      ))}
      <button
        onClick={() => handleTabChange("available")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md text-lg active:scale-90 transition-all duration-200 cursor-pointer"
      >
        Add Players
      </button>
    </div>
  );
};

export default Selected;
