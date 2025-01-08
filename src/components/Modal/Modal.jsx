import "./Modal.css";
import closeButton from "../../assets/close.svg";

export default function Modal(props) {
  return (
    <div
      className={`modal modal_type_${props.modalName} ${
        props.activeModal === props.modalName && "modal_active"
      }`}
    >
      <div className="modal__content">
        <img className="modal__close" src={closeButton} />
        <h3 className="modal__title">{props.modalTitle}</h3>
        {props.children}
      </div>
    </div>
  );
}
