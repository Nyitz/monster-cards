import './MonsterSelector.css';
import { useTranslation } from "react-i18next";

function MonsterSelector({title, children, monsterList, monster, setMonster}) {
  const { t, i18n } = useTranslation();
  
  const updateMonster = e => {
    setMonster(e.target.value);
  };

  return (
    <div className="MonsterSelector">
      <div id="wrapper">
        <h3>{t('monster')}</h3>
        <div id="button-wrapper">
          {monsterList?.map((item, index) => (
            <button onClick={updateMonster} key={item.name} value={item.name} className={`btn-monster ${item.name === monster ? "active" : ""} ${item.collection === "Dungeon" ? "btn-dungeon" : 'btn-open-world'}`}>{item.name}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MonsterSelector;
