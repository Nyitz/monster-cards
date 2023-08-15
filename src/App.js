import './App.css';
import MissionLevelSelector from './components/MissionLevelSelector/MissionLevelSelector';
import MonsterSelector from './components/MonsterSelector/MonsterSelector';
import Details from './components/Details/Details';
import Map from './components/Map/Map';
import { useEffect, useState } from 'react';

function App() {
  // Is data loading during the initial rendering
  const [isLoading, setLoading] = useState(true);

  // All monsters JSON data
  const [monsterData, setMonsterData] = useState([]);

  // Currently selected mission level
  const [missionLevel, setMissionLevel] = useState('range1');

  // Data of monsters in current mission range
  const [monsterList, setMonsterList] = useState([]);

  // Currently selected monster
  const [monster, setMonster] = useState('Cung-Mok');

  // Currently selected monster's spawn area
  const [area, setArea] = useState('Joan');

  const getData = async () => {
    await fetch('./data/monsters.json', {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      setMonsterData(jsonData);
      setLoading(false);
    });
  };
  
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(`[INFO] Mission Level set to: ${missionLevel}`);
    if (monsterData[`${missionLevel}`] !== undefined) {
      setMonsterList(monsterData[`${missionLevel}`]);
    }
  }, [missionLevel, monsterData]);

  useEffect(() => {
    console.log(`[INFO] Monster set to: ${monster}`);
    let currentMonster = monsterList.find((d) => d.name === monster);
    if (currentMonster) {
      let area = currentMonster.spawns[0];
      setArea(area);
    }
  }, [monster]);

  useEffect(() => {
    console.log(`[INFO] isLoading: ${isLoading}`);
  }, [isLoading]);

  useEffect(() => {
    console.log(`[INFO] Monster List undefined: ${monsterList === undefined}`);
  }, [monsterList]);

  useEffect(() => {
    console.log(`[INFO] Area set to: ${area}`);
  }, [area]);
  
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="App">
      <div id="main">
        <MissionLevelSelector missionLevel={missionLevel} setMissionLevel={setMissionLevel}></MissionLevelSelector>
        <Map missionLevel={missionLevel} monster={monster} area={area}></Map>
        <MonsterSelector monsterList={monsterList} monster={monster} setMonster={setMonster}></MonsterSelector>
        <Details monster={monsterList.find((d) => d.name === monster)} area={area}></Details>
      </div>
    </div>
  );
}

export default App;
