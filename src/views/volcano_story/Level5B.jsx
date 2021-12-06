import { useContext } from "react";

import VolcanoContext from "../../context/VolcanoContext";
import level5_final from "../../assets/images/volcano/level_5b.gif";

const LevelFiveB = () => {
  const { setPlayAgain } = useContext(VolcanoContext);

  function playAgainHandler() {
    setPlayAgain(true);
  }

  return (
    <div id="levelFiveB" className="level levelFiveB">
      <div className="animals-img">
        <img src={level5_final} alt="happy ending" />
      </div>
      <div className="sectionContainer">
        <p className="level-5b-p-1">Hooray, You did it</p>

        <p className="q-statement">Thank You!</p>
      </div>

      <a className="play-again" onClick={playAgainHandler} href="#levelOne">
        Play again?
      </a>
    </div>
  );
};

export default LevelFiveB;
