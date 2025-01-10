import "./SignUpModal.css";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function SignUpModal(props) {
  return (
    <ModalWithForm
      modalName="signUp"
      activeModal={props.activeModal}
      modalTitle="Sign Up"
      submitText="Sign Up"
      onSubmit={props.onSubmit}
      alternateButton={
        <button
          className="modal__or-button modal__text-button"
          type="button"
          onClick={() => {
            props.handleOpenModal("logIn");
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
