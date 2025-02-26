import "./LogInModal.css";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LogInModal(props) {
  return (
    <ModalWithForm
      modalName="logIn"
      activeModal={props.activeModal}
      modalTitle="Log In"
      submitText="Log In"
      onSubmit={props.onSubmit}
      alternateButton={
        <button
          className="modal__or-button modal__text-button"
          type="button"
          onClick={() => {
            props.handleOpenModal("signUp");
          }}
        >
          or Sign Up
        </button>
      }
    >
      <label className="modal__label">
        Email
        <input
          className="modal__form-input"
          type="email"
          placeholder="Enter Email"
          required
        ></input>
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__form-input"
          type="password"
          placeholder="Enter Password"
          required
        ></input>
      </label>
    </ModalWithForm>
  );
}
