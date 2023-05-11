import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

import "./NavPanel.css";

const NavPanel = ({switchHandler, themeDark}) => {

  const light = {}

  const darkButton = {
    backgroundColor: "#2e3241",
    color: "#fff",
    border: "0",
    boxShadow: "none"
}

  const darkAnchor = {
    border: "0",
    boxShadow: "none"
  };  

  return (
    <div className="nav-container" style={{ }}>
      <div className="title-container">
        <a href="/">
          <div className="title-wrap">
            <img
              src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png"
              alt="Heading"
            />
          </div>
        </a>
      </div>
      <div className="center-container">
        <button style={themeDark ? darkButton : light}>INR ▼</button>
        <button style={themeDark ? darkButton : light}>BTC ▼</button>
        <a href="/" style={themeDark ? darkButton : light}>BUY BTC</a>
      </div>
      <div className="right-container">
        <a href="https://t.me/HodlInfoBot?startgroup=true" style={themeDark ? darkAnchor : light}>
          <FontAwesomeIcon icon={faTelegram} />
          Connect Telegram
        </a>
        <div className="slider-background" style={themeDark ? darkButton : light} onClick={switchHandler}>
          <div className={ themeDark ? "slider-ball slder-right" : "slider-ball"}></div>
        </div>
      </div>
    </div>
  );
};

export default NavPanel;
