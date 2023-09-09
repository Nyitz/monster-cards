import './App.css';
import MissionLevelSelector from './components/MissionLevelSelector/MissionLevelSelector';
import MonsterSelector from './components/MonsterSelector/MonsterSelector';
import Details from './components/Details/Details';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  
  // Is data loading during the initial rendering
  const [isLoading, setLoading] = useState(true);

  // All monsters JSON data
  const [monsterData, setMonsterData] = useState([]);

  // Currently selected mission level
  const [missionLevel, setMissionLevel] = useState('range1');

  // Data of monsters in current mission range
  const [monsterList, setMonsterList] = useState([]);

  // Data of all monsters in one array
  const [allMonstersList, setAllMonsterList] = useState([]);

  // Currently selected monster
  const [monster, setMonster] = useState('Cung-Mok');

  // Currently selected monster's spawn area
  const [area, setArea] = useState('Joan');

  // Default Kingdom used for M1/M2 mobs
  const [defaultKingdom, setDefaultKingdom] = useState();

  // Language
  const [language, setLanguage] = useState('en');

  const getData = async () => {
    await fetch('./data/monsters.json', {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      if (localStorage.getItem('language') !== null) {
        setLanguage(JSON.parse(localStorage.getItem('language')));
      }
      if (localStorage.getItem('defaultKingdom') !== null) {
        setDefaultKingdom(JSON.parse(localStorage.getItem('defaultKingdom')));
      }
      setMonsterData(jsonData);
      setLoading(false);
    });
  };
  
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let allMobsList = [];
    for (let i = 1; i <= 7; i++) {
      if (monsterData[`range${i}`]) {
        allMobsList = allMobsList.concat(monsterData[`range${i}`]);
      }
    }
    setAllMonsterList(allMobsList);
  }, [monsterData]);

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
      if (missionLevel === 'range1' && currentMonster.collection !== 'Dungeon') {
        switch (defaultKingdom) {
          case 'Chunjo': area = 'Joan'; break;
          case 'Jinno': area = 'Pyungmoo'; break;
          case 'Shinsoo': area = 'Yongan'; break;
        }
      }
      if (missionLevel === 'range2' && currentMonster.collection !== 'Dungeon' && currentMonster.name !== 'Chief Orc') {
        switch (defaultKingdom) {
          case 'Chunjo': area = 'Bokjung'; break;
          case 'Jinno': area = 'Bakra'; break;
          case 'Shinsoo': area = 'Yayang'; break;
        }
      }
      setArea(area);
    }
  }, [monster, defaultKingdom]);

  useEffect(() => {
    console.log(`[INFO] isLoading: ${isLoading}`);
  }, [isLoading]);

  useEffect(() => {
    console.log(`[INFO] Monster List undefined: ${monsterList === undefined}`);
  }, [monsterList]);

  useEffect(() => {
    console.log(`[INFO] All Monsters List undefined: ${allMonstersList === undefined}`);
  }, [allMonstersList]);

  useEffect(() => {
    console.log(`[INFO] Area set to: ${area}`);
  }, [area]);

  useEffect(() => {
    console.log(`[INFO] Language set to: ${language}`);
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    console.log(`[INFO] Default Kingdom set to: ${defaultKingdom}`);
    if (missionLevel === 'range1' && monster.collection !== 'Dungeon') {
      switch (defaultKingdom) {
        case 'Chunjo': setArea('Joan'); break;
        case 'Jinno': setArea('Pyungmoo'); break;
        case 'Shinsoo': setArea('Yongan'); break;
      }
    }
    if (missionLevel === 'range2' && monster.collection !== 'Dungeon' && monster.name !== 'Chief Orc') {
      switch (defaultKingdom) {
        case 'Chunjo': setArea('Bokjung'); break;
        case 'Jinno': setArea('Bakra'); break;
        case 'Shinsoo': setArea('Yayang'); break;
      }
    }
  }, [defaultKingdom]);
  
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="App">
      <div id="wrapper">
      <Header setLanguage={setLanguage} setDefaultKingdom={setDefaultKingdom}></Header>
      <div id="main">
        <MissionLevelSelector missionLevel={missionLevel} setMissionLevel={setMissionLevel}></MissionLevelSelector>
        <Map monster={allMonstersList.find((d) => d.name === monster)} area={area} setArea={setArea}></Map>
        <MonsterSelector monsterList={monsterList} monster={monster} setMonster={setMonster}></MonsterSelector>
        <Details monster={allMonstersList.find((d) => d.name === monster)} area={area}></Details>
      </div>
      </div>
    </div>
  );
}

export default App;
