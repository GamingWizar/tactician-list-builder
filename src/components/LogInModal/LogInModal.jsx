import "./LogInModal.css";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LogInModal(props) {
  return (
    <ModalWithForm
      modalName="logIn"
      modalTitle={props.modalTitle}
      activeModal={props.activeModal}
      submitText={props.submitText}
      onSubmit={props.onSubmit}
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
