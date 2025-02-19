import "./UnitOption.css";
import termagantImg from "../../assets/termagant.jpg";

export default function UnitOption(props) {
  return (
    <div className="unit-option">
      <div className="unit-option__section">
        <img
          className="unit-option__image"
          alt={"Termagant"}
          src={termagantImg}
        />
        <h4 className="unit-option__name">{props.name}</h4>
      </div>
      <div className="unit-option__section">
        <h4 className="unit-option__points">{props.points + " Points"}</h4>
        <button
          className="unit-option__add"
          onClick={() => {
            props.handleAddUnit(props.unit, props.type, props.points);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
