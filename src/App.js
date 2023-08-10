import './App.css';
import MissionLevelSelector from './components/MissionLevelSelector/MissionLevelSelector';
import MonsterSelector from './components/MonsterSelector/MonsterSelector';
import Details from './components/Details/Details';
import Map from './components/Map/Map';
import { useEffect, useState } from 'react';

function App() {
  const [missionLevel, setMissionLevel] = useState('range1');

  const getData = () => {
    fetch('./data/monsters.json', {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(jsonData) {
      console.log(jsonData);
    });
  };
  
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(`[INFO] Mission Level set to: ${missionLevel}`);
  }, [missionLevel]);
  
  return (
    <div className="App">
      <div id="main">
        <MissionLevelSelector missionLevel={missionLevel} setMissionLevel={setMissionLevel}></MissionLevelSelector>
        <Map></Map>
        <MonsterSelector></MonsterSelector>
        <Details></Details>
      </div>
    </div>
  );
}

export default App;
