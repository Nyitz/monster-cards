import './MissionLevelSelector.css';
import { useState } from "react";

function MissionLevelSelector({title, children, missionLevel, setMissionLevel}) {
  const updateMissionLevel = e => {
    setMissionLevel(e.target.value);
  };

  return (
    <div className="MissionLevelSelector">
      <div id="wrapper">
        <h3>Mission level</h3>
        <div id="button-wrapper">
          <button onClick={updateMissionLevel} value="range1" className={`btn-mission-lvl range1 ${missionLevel === "range1" ? "active" : ""}`}>1&nbsp;2&nbsp;3</button>
          <button onClick={updateMissionLevel} value="range2" className={`btn-mission-lvl range2 ${missionLevel === "range2" ? "active" : ""}`}>4&nbsp;5&nbsp;6</button>
          <button onClick={updateMissionLevel} value="range3" className={`btn-mission-lvl range3 ${missionLevel === "range3" ? "active" : ""}`}>7&nbsp;8&nbsp;9</button>
          <button onClick={updateMissionLevel} value="range4" className={`btn-mission-lvl range4 ${missionLevel === "range4" ? "active" : ""}`}>10 11 12</button>
          <button onClick={updateMissionLevel} value="range5" className={`btn-mission-lvl range5 ${missionLevel === "range5" ? "active" : ""}`}>13 14 15</button>
          <button onClick={updateMissionLevel} value="range6" className={`btn-mission-lvl range6 ${missionLevel === "range6" ? "active" : ""}`}>16&nbsp;17</button>
          <button onClick={updateMissionLevel} value="range7" className={`btn-mission-lvl range7 ${missionLevel === "range7" ? "active" : ""}`}>18</button>
        </div>
      </div>
    </div>
  );
}

export default MissionLevelSelector;
