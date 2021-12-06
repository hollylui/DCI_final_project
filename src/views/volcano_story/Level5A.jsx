import { useContext } from "react";

import VolcanoContext from "../../context/VolcanoContext";
import level5_final from "../../assets/images/volcano/level_5a.gif";

const LevelFiveA = () => {
  const { setPlayAgain } = useContext(VolcanoContext);

  function playAgainHandler() {
    setPlayAgain(true);
  }

  return (
    <div id="levelFiveA" className="level levelFiveA">
      <div className="animals-img">
        <img src={level5_final} alt="happy ending" />
      </div>
      <div className="sectionContainer">
        <p className="level-5a-p-1">Hooray, You did it</p>
        <p className="q-statement">Thank You!</p>
      </div>

      <a className="play-again" onClick={playAgainHandler} href="#levelOne">
        Play again?
      </a>
    </div>
  );
};

export default LevelFiveA;
