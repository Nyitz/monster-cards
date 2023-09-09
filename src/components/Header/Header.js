import './Header.css';
import { useTranslation } from "react-i18next";
import flagChunjo from "../../images/Chunjo.png";
import flagJinno from "../../images/Jinno.png";
import flagShinsoo from "../../images/Shinsoo.png";
import flagPL from "../../images/pl.svg";
import flagGB from "../../images/gb.svg";

function Header({title, children, setLanguage, setDefaultKingdom}) {
  const { t, i18n } = useTranslation();

  const updateLanguage = e => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('language', JSON.stringify(e.target.value));
    setLanguage(e.target.value);
  };
  const updateDefaultKingdom = e => {
    localStorage.setItem('defaultKingdom', JSON.stringify(e.target.value));
    setDefaultKingdom(e.target.value);
  };

  return (
    <div className='Header'>
      <div id='wrapper'>
        <div id='container-language'>
          <p className="caption"> Language </p>
          <button onClick={updateLanguage} value="pl" className='btn-language' id='btn-language-pl' style={{backgroundImage: `url(${flagPL})`}}></button>
          <button onClick={updateLanguage} value="en" className='btn-language' id='btn-language-eng' style={{backgroundImage: `url(${flagGB})`}}></button>
        </div>
        <div id='container-kingdom'>
          <p className="caption"> Default Kingdom </p>
          <button onClick={updateDefaultKingdom} value="Chunjo" className='btn-kingdom' id='btn-kingdom-chunjo' style={{backgroundImage: `url(${flagChunjo})`}}></button>
          <button onClick={updateDefaultKingdom} value="Jinno" className='btn-kingdom' id='btn-kingdom-jinno' style={{backgroundImage: `url(${flagJinno})`}}></button>
          <button onClick={updateDefaultKingdom} value="Shinsoo" className='btn-kingdom' id='btn-kingdom-shinsoo' style={{backgroundImage: `url(${flagShinsoo})`}}></button>
        </div>
      </div>
    </div>
  );
}

export default Header;