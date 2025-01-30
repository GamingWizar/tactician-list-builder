import "./UnitOption.css";
import termagantImg from "../../assets/termagant.jpg";

export default function UnitOption(props) {
  return (
    <div className="unit-option">
      <img className="unit-option__image" alt="Termagant" src={termagantImg} />
      <button className="unit-option__add">Plus</button>
    </div>
  );
}
