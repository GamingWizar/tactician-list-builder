import React from "react";
import { Routes, Route } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import LogInModal from "../LogInModal/LogInModal";

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: "Carver",
    email: "example-email.com",
    _id: "12345",
  });

  const [activeModal, setActiveModal] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const onLogIn = (evt) => {
    evt.preventDefault();
    setIsLoggedIn(true);
    handleCloseModal();
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
      <Header handleOpenModal={handleOpenModal} />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
      <LogInModal
        modalName="test"
        activeModal={activeModal}
        modalTitle="Log In"
        submitText="Log In"
        onSubmit={onLogIn}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
