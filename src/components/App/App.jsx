import React from "react";
import { Routes, Route } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

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
        <Route path="/rosters/create" element={<ArmyCreator />} />
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
      <UnitModal activeModal={activeModal} title="Battleline" />
    </CurrentUserContext.Provider>
  );
}

export default App;
