import "./UnitSection.css";
import UnitDisplay from "../UnitDisplay/UnitDisplay";

export default function UnitSection(props) {
  return (
    <div className="unit-section">
      <div className="unit-section__header">
        <button
          className="unit-section__add"
          onClick={() => {
            props.handleOpenUnitModal(props.title);
          }}
        >
          Add
        </button>
        <h4 className="unit-section__title">{props.title}</h4>
      </div>
      {props.units.map((unit) => (
        <UnitDisplay unit={unit} key={unit.id} />
      ))}
    </div>
  );
}
