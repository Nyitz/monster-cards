import './Header.css';
import { useTranslation } from "react-i18next";
import flagChunjo from "../../images/Chunjo.png";
import flagJinno from "../../images/Jinno.png";
import flagShinsoo from "../../images/Shinsoo.png";
import flagPL from "../../images/pl.svg";
import flagGB from "../../images/gb.svg";
import flagTR from "../../images/tr.svg";
import flagES from "../../images/es.svg";
import flagFR from "../../images/fr.svg";
import flagDE from "../../images/de.svg";

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
          <p className="caption"> {t('language')} </p>
          <button onClick={updateLanguage} title="PL" value="pl" className='btn-language' id='btn-language-pl' style={{backgroundImage: `url(${flagPL})`}}></button>
          <button onClick={updateLanguage} title="EN" value="en" className='btn-language' id='btn-language-en' style={{backgroundImage: `url(${flagGB})`}}></button>
          <button onClick={updateLanguage} title="TR" value="tr" className='btn-language' id='btn-language-tr' style={{backgroundImage: `url(${flagTR})`}}></button>
          <button onClick={updateLanguage} title="ES" value="es" className='btn-language' id='btn-language-es' style={{backgroundImage: `url(${flagES})`}}></button>
          <button onClick={updateLanguage} title="FR" value="fr" className='btn-language' id='btn-language-fr' style={{backgroundImage: `url(${flagFR})`}}></button>
          <button onClick={updateLanguage} title="DE" value="de" className='btn-language' id='btn-language-de' style={{backgroundImage: `url(${flagDE})`}}></button>
        </div>
        <div id='container-kingdom'>
          <p className="caption"> {t('default-kingdom')} </p>
          <button onClick={updateDefaultKingdom} title={t('chunjo')} value="Chunjo" className='btn-kingdom' id='btn-kingdom-chunjo' style={{backgroundImage: `url(${flagChunjo})`}}></button>
          <button onClick={updateDefaultKingdom} title={t('jinno')} value="Jinno" className='btn-kingdom' id='btn-kingdom-jinno' style={{backgroundImage: `url(${flagJinno})`}}></button>
          <button onClick={updateDefaultKingdom} title={t('shinsoo')}  value="Shinsoo" className='btn-kingdom' id='btn-kingdom-shinsoo' style={{backgroundImage: `url(${flagShinsoo})`}}></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
