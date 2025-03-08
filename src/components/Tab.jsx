const Tab = ({ activeTab, handleTabChange, selectedPlayers }) => {
  return (
    <div className="flex justify-between items-center mt-10">
      {/* Title Changing Smoothly */}
      <div>
        <h1 className="text-3xl font-bold transition-all duration-200">
          {activeTab === "available"
            ? "Available Players"
            : `Selected Players (${selectedPlayers.length}/6)`}
        </h1>
      </div>

      {/* Tab Buttons */}
      <div className="border border-gray-300 rounded-full overflow-hidden flex">
        <button
          onClick={() => handleTabChange("available")}
          className={`rounded-full px-6 py-3 transition-all duration-200 ease-in-out
      ${
        activeTab === "available"
          ? "bg-blue-600 text-white shadow-lg"
          : "bg-white text-blue-600 hover:bg-blue-50"
      }
      focus:outline-none`}
        >
          Available
        </button>
        <button
          onClick={() => handleTabChange("selected")}
          className={`rounded-full px-6 py-3 transition-all duration-200 ease-in-out
      ${
        activeTab === "selected"
          ? "bg-blue-600 text-white shadow-lg"
          : "bg-white text-blue-600 hover:bg-blue-50"
      }
      focus:outline-none`}
        >
          Selected
        </button>
      </div>
    </div>
  );
};

export default Tab;
