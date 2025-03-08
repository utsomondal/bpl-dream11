import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tab from "./components/Tab";
import Available from "./components/Available";
import Selected from "./components/Selected";
import { toast } from "react-toastify";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("available");
  const [credit, setCredit] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleCreditBtn = () => {
    let newCredit = credit + 6000000;
    setCredit(newCredit);
    toast.success(`You Got ${newCredit} Credit`, {
      position: "top-center",
    });
  };

  const handleChoosePlayer = (player) => {
    if (credit < player.biddingPrice) {
      toast.error("You Don't Have Enough Credit", {
        position: "top-center",
      });
      return;
    }

    if (selectedPlayers.some((p) => p.playerId === player.playerId)) {
      toast.warning("Player Already in Team", {
        position: "top-center",
      });
      return;
    }

    if (selectedPlayers.length < 6) {
      const newSelectedPlayer = [...selectedPlayers, player];
      setSelectedPlayers(newSelectedPlayer);
      const newCredit = credit - player.biddingPrice;
      setCredit(newCredit);
      toast.success(`${player.name} Added Successfully!`, {
        position: "top-center",
      });
    } else {
      toast.error("Player Limit Exceeded", {
        position: "top-center",
      });
    }
  };

  const handleDeleteBtn = (player) => {
    const updatedPlayers = selectedPlayers.filter(
      (p) => p.playerId !== player.playerId
    );
    setSelectedPlayers(updatedPlayers);
  };

  return (
    <>
      <div className="container mx-auto mt-3">
        <Navbar credit={credit}></Navbar>
        <Hero handleCreditBtn={handleCreditBtn}></Hero>
        <Tab
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          selectedPlayers={selectedPlayers}
        ></Tab>
        {activeTab === "available" ? (
          <Available handleChoosePlayer={handleChoosePlayer}></Available>
        ) : (
          <Selected
            handleTabChange={handleTabChange}
            selectedPlayers={selectedPlayers}
            handleDeleteBtn={handleDeleteBtn}
          ></Selected>
        )}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
