import "./UnitSection.css";

export default function UnitSection(props) {
  return (
    <div className="unit-section">
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
  );
}
