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
        <div id="container">
          <h3>{t('monster')}</h3>
          <div className="caption-legend caption-open-world"></div>
          <div className="caption-text"> {t('open-world-collection')} </div>
          <div className="caption-legend caption-dungeon"></div>
          <div className="caption-text"> {t('dungeon-collection')} </div>
        </div>
        <div id="button-wrapper">
          {monsterList?.map((item, index) => (
            <button onClick={updateMonster} key={item.name} value={item.name} className={`btn-monster ${item.name === monster ? "active" : ""} ${item.collection === "Dungeon" ? "btn-dungeon" : 'btn-open-world'}`}>{t(`${item.name.toString().toLowerCase().replace(/\s+/g, '-')}`)}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MonsterSelector;
