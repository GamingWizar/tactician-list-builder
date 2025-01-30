import "./UnitModal.css";
import UnitOption from "../UnitOption/UnitOption";

export default function UnitModal(props) {
  return (
    <div
      className={`modal modal_type_unit ${
        props.activeModal === "unit" && "modal_active"
      }`}
    >
      <div className="unit-modal__content">
        <h3 className="unit-modal__title">{props.title}</h3>
        <UnitOption />
      </div>
    </div>
  );
}
