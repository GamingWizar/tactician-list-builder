import "./ModalWithForm.css";

import Modal from "../Modal/Modal";

export default function ModalWithForm(props) {
  return (
    <Modal
      modalName={props.modalName}
      modalTitle={props.modalTitle}
      activeModal={props.activeModal}
    >
      <form className="modal__form" onSubmit={props.onSubmit} noValidate>
        {props.children}
        <button className="modal__form-submit" type="submit">
          {props.submitText}
        </button>
        {props.alternateButton}
      </form>
    </Modal>
  );
}
