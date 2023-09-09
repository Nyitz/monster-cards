import './Map.css';
import { useTranslation } from "react-i18next";

function Map({title, children, monster, area, setArea}) {
  const { t, i18n } = useTranslation();

  const updateArea = e => {
    setArea(e.target.value);
  };

  if (!monster) {
    return <div className="Map">Loading...</div>;
  }
  return (
    <div className="Map">
      <div id="wrapper">
        <h3>{t('map')}</h3>
        <div id="container-map">
          <div id="container-buttons">
          {monster.spawns?.map((item, index) => (
            <button onClick={updateArea} key={item} value={item} className={`btn-area btn-${item.toString().toLowerCase().replace(/\s+/g, '-')}  ${item === area ? "active" : ""}`}>{t(item.toString().toLowerCase().replace(/\s+/g, '-'))}</button>
          ))}
          </div>
          
          <div id="container-images">
            <img id="map" src={`${process.env.PUBLIC_URL}/assets/maps/${area}.png`} className={`img-map img-${area.toString().toLowerCase().replace(/\s+/g, '-')}`}/>
            <img id="spawn" src={`${process.env.PUBLIC_URL}/assets/maps/${monster.name}/${area}/spawn.png`} className={`img-map img-${area.toString().toLowerCase().replace(/\s+/g, '-')}`}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
