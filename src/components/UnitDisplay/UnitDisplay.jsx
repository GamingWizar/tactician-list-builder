import "./UnitDisplay.css";
import termagantImg from "../../assets/termagant.jpg";

export default function UnitDisplay(props) {
  return (
    <div className="unit-display">
      <div className="unit-display__section">
        <img className="unit-display__img" src={termagantImg} />
        <h5 className="unit-display__title">{props.unit.name}</h5>
      </div>
    </div>
  );
}
