import './Details.css';

function Details({title, children, monster}) {
  if (!monster) {
    return <div className="Details">Loading...</div>;
  }
  return (
    <div className="Details">
      <div id="wrapper">
        <h3>Details</h3>
        <div id="info-wrapper">
          <div id="container-top">
            <div id="monster-name">{monster.name}</div>
            <div id="level-key"> Level </div> 
            <div id="level-value"> {monster.level} </div>
            <div id="class-key"> Class </div> 
            <div id="class-value"> {monster.rank} </div>
            <img src={`${process.env.PUBLIC_URL}/assets/card-images/${monster.name}.png`} id='card-image'/>
            <img src={`${process.env.PUBLIC_URL}/assets/monster-images/${monster.name}.png`} id='monster-image'/>
            <div id="spawns-list">
              <div id="spawns-caption">Spawns</div>
              {monster.spawns?.map((item, index) => (
                <div key={index} className="info-spawn">{item}</div>
              ))}
            </div>
            <div id="bonuses-list">
              <div id="bonuses-caption">Bonuses</div>
              {monster.bonuses?.map((item, index) => (
                <div key={index} className="info-bonus">{item}</div>
              ))}
            </div>
            <img id ="element-icon" src={`${process.env.PUBLIC_URL}/assets/element-icons/${monster.element}.png`} className={`${monster.element !== "" ? `icon-${monster.element.toString().toLowerCase()}` : 'icon-element-none'}`}/>
            <div id="element-off"> Power of {monster.element} </div>
            <div id="element-def"> {monster.element} Resistance </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
