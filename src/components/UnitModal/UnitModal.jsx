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
        {props.title === "Characters" ? (
          <>
            <h3 className="unit-modal__subtitle">Epic Heroes</h3>
            {props.units.epicHero.map((unit) => (
              <UnitOption
                key={unit.name}
                name={unit.name}
                points={unit.unitComp[0].points}
              />
            ))}
            <h3 className="unit-modal__subtitle">Generic Characters</h3>
            {props.units.generic.map((unit) => (
              <UnitOption
                key={unit.name}
                name={unit.name}
                points={unit.unitComp[0].points}
              />
            ))}
          </>
        ) : (
          props.units.map((unit) => (
            <UnitOption
              key={unit.name}
              name={unit.name}
              points={unit.unitComp[0].points}
            />
          ))
        )}
      </div>
    </div>
  );
}
