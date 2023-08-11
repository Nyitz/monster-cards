import './MonsterSelector.css';

function MonsterSelector({title, children, monsterList, monster, setMonster}) {
  const updateMonster = e => {
    setMonster(e.target.value);
  };

  return (
    <div className="MonsterSelector">
      <div id="wrapper">
        <h3>Monster</h3>
        <div id="button-wrapper">
          {monsterList?.map((item, index) => (
            <button onClick={updateMonster} key={item.name} value={item.name} className={`btn-monster ${item.collection === "Dungeon" ? "btn-dungeon" : 'btn-open-world'}`}>{item.name}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MonsterSelector;
