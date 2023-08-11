import './App.css';
import MissionLevelSelector from './components/MissionLevelSelector/MissionLevelSelector';
import MonsterSelector from './components/MonsterSelector/MonsterSelector';
import Details from './components/Details/Details';
import Map from './components/Map/Map';
import { useEffect, useState } from 'react';

function App() {
  // All monsters JSON data
  const [monsterData, setMonsterData] = useState([]);

  // Currently selected mission level
  const [missionLevel, setMissionLevel] = useState('range1');

  // Data of monsters in current mission range
  const [monsterList, setMonsterList] = useState([]);

  // Currently selected monster
  const [monster, setMonster] = useState('Cung-Mok');

  const getData = () => {
    fetch('./data/monsters.json', {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      setMonsterData(jsonData);
    });
  };
  
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(`[INFO] Mission Level set to: ${missionLevel}`);
    console.log(`[INFO] Setting Monster List to: ${monsterData[`${missionLevel}`]}`);
    setMonsterList(monsterData[`${missionLevel}`]);
  }, [missionLevel]);

  useEffect(() => {
    console.log(`[INFO] Monster set to: ${monster}`);
  }, [monster]);
  
  return (
    <div className="App">
      <div id="main">
        <MissionLevelSelector missionLevel={missionLevel} setMissionLevel={setMissionLevel}></MissionLevelSelector>
        <Map></Map>
        <MonsterSelector monsterList={monsterList} monster={monster} setMonster={setMonster}></MonsterSelector>
        <Details></Details>
      </div>
    </div>
  );
}

export default App;
