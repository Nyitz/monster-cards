import './MissionLevelSelector.css';
import { useTranslation } from "react-i18next";

function MissionLevelSelector({title, children, missionLevel, setMissionLevel}) {
  const { t, i18n } = useTranslation();

  const updateMissionLevel = e => {
    setMissionLevel(e.target.value);
  };

  return (
    <div className="MissionLevelSelector">
      <div id="wrapper">
        <h3>{t('mission-level')}</h3>
        <div id="button-wrapper">
          <button onClick={updateMissionLevel} value="range1" className={`btn-mission-lvl range1 ${missionLevel === "range1" ? "active" : ""}`}>1&nbsp;2&nbsp;3</button>
          <button onClick={updateMissionLevel} value="range2" className={`btn-mission-lvl range2 ${missionLevel === "range2" ? "active" : ""}`}>4&nbsp;5&nbsp;6</button>
          <button onClick={updateMissionLevel} value="range3" className={`btn-mission-lvl range3 ${missionLevel === "range3" ? "active" : ""}`}>7&nbsp;8&nbsp;9</button>
          <button onClick={updateMissionLevel} value="range4" className={`btn-mission-lvl range4 ${missionLevel === "range4" ? "active" : ""}`}>10 11 12</button>
          <button disabled={true} onClick={updateMissionLevel} value="range5" className={`btn-mission-lvl range5 ${missionLevel === "range5" ? "active" : ""}`} title="Soon™">13 14 15</button>
          <button disabled={true} onClick={updateMissionLevel} value="range6" className={`btn-mission-lvl range6 ${missionLevel === "range6" ? "active" : ""}`} title="Soon™">16&nbsp;17</button>
          <button disabled={true} onClick={updateMissionLevel} value="range7" className={`btn-mission-lvl range7 ${missionLevel === "range7" ? "active" : ""}`} title="Soon™">18</button>
        </div>
      </div>
    </div>
  );
}

export default MissionLevelSelector;
