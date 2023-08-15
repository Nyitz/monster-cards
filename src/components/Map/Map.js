import logo from '../../logo.svg';
import './Map.css';

function Map({title, children, missionLevel, monster, area}) {
  return (
    <div className="Map">
      <div id="wrapper">
        <h3>Map</h3>
        <div id="container-map">
          <img id="map" src={`${process.env.PUBLIC_URL}/assets/maps/${area}.png`}/>
          <img id="spawn" src={`${process.env.PUBLIC_URL}/assets/maps/${missionLevel}/${monster}/${area}/spawn.png`}/>
        </div>
      </div>
    </div>
  );
}

export default Map;
