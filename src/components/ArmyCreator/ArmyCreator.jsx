import "./ArmyCreator.css";

export default function ArmyCreator(props) {
  return (
    <section className="army-creator page__section">
      <div className="army-creator__header">
        <div className="army-creator__header-content">
          <h3 className="army-creator__title">List Name</h3>
          <div className="army-creator__header-section">
            <p className="army-creator__points">1200/2000 Points</p>
            <button className="army-creator__settings army-creator__text-button">
              Roster Settings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
