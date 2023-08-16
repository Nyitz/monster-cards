import logo from '../../logo.svg';
import './Map.css';

function Map({title, children, monster, area, setArea}) {
  const updateArea = e => {
    setArea(e.target.value);
  };

  if (!monster) {
    return <div className="Map">Loading...</div>;
  }
  return (
    <div className="Map">
      <div id="wrapper">
        <h3>Map</h3>
        <div id="container-map">
          <div id="container-buttons">
          {monster.spawns?.map((item, index) => (
            <button onClick={updateArea} key={item} value={item} className={`btn-area btn-${item.toString().toLowerCase()}`}>{item}</button>
          ))}
          </div>
          
          <div id="container-images">
            <img id="map" src={`${process.env.PUBLIC_URL}/assets/maps/${area}.png`}
              className={
                `btn-area ${(area === "Joan" || area === "Pyungmoo" || area === "Yongan") ? "img-m1" : ""} ${(area === "Bokjung" || area === "Bakra" || area === "Jayang") ? "img-m2" : ""} ${(area === "Valley of Seongryong") ? "img-m2" : ""} ${(area === "Yongbi Desert") ? "img-yongbi" : ""} ${(area === "Mount Sohan") ? "img-sohan" : ""} ${(area === "Fireland") ? "img-fireland" : ""} ${(area === "Temple of Hwang") ? "img-hwang" : ""}`
              }
            />
            <img id="spawn" src={`${process.env.PUBLIC_URL}/assets/maps/${monster.name}/${area}/spawn.png`}
              className={
                `btn-area ${(area === "Joan" || area === "Pyungmoo" || area === "Yongan") ? "img-m1" : ""} ${(area === "Bokjung" || area === "Bakra" || area === "Jayang") ? "img-m2" : ""} ${(area === "Valley of Seongryong") ? "img-m2" : ""} ${(area === "Yongbi Desert") ? "img-yongbi" : ""} ${(area === "Mount Sohan") ? "img-sohan" : ""} ${(area === "Fireland") ? "img-fireland" : ""} ${(area === "Temple of Hwang") ? "img-hwang" : ""}`
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
