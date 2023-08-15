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
  }, [monster]);

  useEffect(() => {
    console.log(`[INFO] isLoading: ${isLoading}`);
  }, [isLoading]);

  useEffect(() => {
    console.log(`[INFO] Monster List undefined: ${monsterList === undefined}`);
  }, [monsterList]);
  
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="App">
      <div id="main">
        <MissionLevelSelector missionLevel={missionLevel} setMissionLevel={setMissionLevel}></MissionLevelSelector>
        <Map></Map>
        <MonsterSelector monsterList={monsterList} monster={monster} setMonster={setMonster}></MonsterSelector>
        <Details monster={monsterList.find((d) => d.name === monster)}></Details>
      </div>
    </div>
  );
}

export default App;
