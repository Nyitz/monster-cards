import './Details.css';
import { useTranslation } from "react-i18next";

function Details({title, children, monster}) {
  const { t, i18n } = useTranslation();

  if (!monster) {
    return <div className="Details">Loading...</div>;
  }
  return (
    <div className="Details">
      <div id="wrapper">
        <h3>{t('details')}</h3>
        <div id="info-wrapper">
          <div id="details-grid">
            <div id="monster-name">{t(monster.name.toString().toLowerCase().replace(/\s+/g, '-'))}</div>
            <div id="level-key"> {t('level')} </div> 
            <div id="level-value"> {monster.level} </div>
            <div id="class-key"> {t('rank')} </div> 
            <div id="class-value"> {t(monster.rank)} </div>
            <img src={`${process.env.PUBLIC_URL}/assets/card-images/${monster.name}.png`} id='card-image'/>
            <div id="container-monster-image">
              <img src={`${process.env.PUBLIC_URL}/assets/monster-images/${monster.name}.png`} id='monster-image' className={`${monster.element !== "" ? `monster-image-${monster.element.toString().toLowerCase()}` : 'monster-image-element-none'}`}/>
            </div>
            <div id="spawns-list">
              <div id="spawns-caption">{t('spawns')}</div>
              {monster.spawns?.map((item, index) => (
                <div key={index} className="info-spawn">{t(item.toString().toLowerCase().replace(/\s+/g, '-'))}</div>
              ))}
            </div>
            <div id="bonuses-list">
              <div id="bonuses-caption">{t('bonuses')}</div>
              {monster.bonuses?.map((item, index) => (
                <div key={index} className="info-bonus">{t(item.toString().toLowerCase().replace(/\s+/g, '-'))}</div>
              ))}
              {(monster.bonuses.length === 0)?
                <div className="info-bonus"> {t('n/a')}</div>
                :
                null
              }
            </div>
            
            <div id="container-element-icon">
              {(monster.element !== "")?
                <img id="element-icon" title={t(`element-of-${monster.element.toString().toLowerCase()}`)} src={`${process.env.PUBLIC_URL}/assets/element-icons/${monster.element}.png`} alt="Element Icon" className={`${monster.element !== "" ? `icon-${monster.element.toString().toLowerCase()}` : 'icon-element-none'}`}/>
              :
                <img id="element-icon" title={t('element-none')} src={`${process.env.PUBLIC_URL}/assets/element-icons/None.png`} alt="Element Icon" className={`${monster.element !== "" ? `icon-${monster.element.toString().toLowerCase()}` : 'icon-element-none'}`}/>
              }
            </div>
            {(monster.element !== "")?
              <div id="element-off"> {t(`power-of-${monster.element.toString().toLowerCase()}`)} </div>
            :
              <div id="element-off"> {t('n/a')} </div>
            }
            {(monster.element !== "")?
              <div id="element-def"> {t(`${monster.element.toString().toLowerCase()}-resistance`)} </div>
            :
              <div id="element-def"> {t('n/a')} </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
