import React from "react";
import { Routes, Route } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { tyranidUnits } from "../../utils/tyranidUnits";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import RosterList from "../RosterList/RosterList";
import ArmyCreator from "../ArmyCreator/ArmyCreator";

import LogInModal from "../LogInModal/LogInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import UnitModal from "../UnitModal/UnitModal";

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: "Carver",
    email: "example-email.com",
    _id: "12345",
  });

  const [activeModal, setActiveModal] = React.useState("unit");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [unitModalTitle, setUnitModalTitle] = React.useState("");
  const [activeUnits, setActiveUnits] = React.useState([
    {
      name: "Termagants",
      unitComp: [
        {
          models: [
            {
              model: "Termagant",
              count: "10",
              loadout: ["Fleshborer", "Chitinous Claws and Teeth"],
            },
          ],
          points: "60",
        },
        {
          models: [
            {
              model: "Termagant",
              count: "20",
              loadout: ["Fleshborer", "Chitinous Claws and Teeth"],
            },
          ],
          points: "120",
        },
      ],
      profile: {
        statline: {
          movement: '6"',
          toughness: "3",
          save: "5+",
          wounds: "1",
          leadership: "8+",
          oc: "2",
        },
        weapons: {
          ranged: [
            {
              name: "Fleshborer",
              range: '18"',
              attacks: "1",
              bs: "4+",
              strength: "5",
              ap: "0",
              damage: "1",
              abilities: ["Assault"],
            },
            {
              name: "Shardlauncher",
              range: '18"',
              attacks: "D3",
              bs: "4+",
              strength: "5",
              ap: "0",
              damage: "1",
              abilities: ["Blast", "Heavy"],
            },
            {
              name: "Spike Rifle",
              range: '24"',
              attacks: "1",
              bs: "4+",
              strength: "4",
              ap: "-1",
              damage: "1",
              abilities: ["Heavy"],
            },
            {
              name: "Strangleweb",
              range: '18"',
              attacks: "D6",
              bs: "N/A",
              strength: "2",
              ap: "0",
              damage: "1",
              abilities: ["Assault", "Devastating Wounds", "Torrent"],
            },
            {
              name: "Termagant Devourer",
              range: '18"',
              attacks: "2",
              bs: "4+",
              strength: "4",
              ap: "0",
              damage: "1",
              abilities: [],
            },
            {
              name: "Termagant Spinefists",
              range: '12"',
              attacks: "2",
              bs: "4+",
              strength: "3",
              ap: "0",
              damage: "1",
              abilities: ["Assault", "Pistol", "Twin-linked"],
            },
          ],
          melee: [
            {
              name: "Chitinous claws and teeth",
              range: "Melee",
              attacks: "1",
              ws: "4+",
              strength: "3",
              ap: "0",
              damage: "1",
              abilities: [],
            },
          ],
        },
        abilities: {
          core: [],
          faction: [{ name: "Synapse" }],
          datasheet: [
            {
              name: "Skulking Horrors",
              value:
                'Once per turn, when an enemy unit ends a Normal, Advance, or Fall Back move within 9" of this unit, if this unit is not within Engagment Range of one or more enemy units, it can make a Normal move of up to D6"',
            },
          ],
        },
      },
    },
  ]);

  const onLogIn = (evt) => {
    evt.preventDefault();
    setIsLoggedIn(true);
    handleCloseModal();
  };

  const onSignUp = (evt) => {
    evt.preventDefault();
    handleCloseModal();
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  const handleOpenModal = (modalName) => {
    setActiveModal(modalName);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleOpenUnitModal = (unitType) => {
    setUnitModalTitle(unitType);
    setActiveUnits(tyranidUnits[unitType.toLowerCase()]);
    setActiveModal("unit");
  };

  React.useEffect(() => {
    if (activeModal === "") {
      return;
    }

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };

    const handleClickClose = (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal__close")
      ) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleClickClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleClickClose);
    };
  }, [activeModal]);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <Header
        handleOpenModal={handleOpenModal}
        isLoggedIn={isLoggedIn}
        handleLogOut={handleLogOut}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rosters" element={<RosterList />} />
        <Route
          path="/rosters/create"
          element={<ArmyCreator handleOpenUnitModal={handleOpenUnitModal} />}
        />
      </Routes>
      <Footer />
      <LogInModal
        activeModal={activeModal}
        onSubmit={onLogIn}
        handleOpenModal={handleOpenModal}
      />
      <SignUpModal
        activeModal={activeModal}
        onSubmit={onSignUp}
        handleOpenModal={handleOpenModal}
      />
      <UnitModal
        activeModal={activeModal}
        title={unitModalTitle}
        units={activeUnits}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
