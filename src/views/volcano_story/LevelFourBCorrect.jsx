import { useContext } from "react";

import VolcanoContext from "../../context/VolcanoContext";
import level4_final from "../../assets/images/volcano/level_4b_correct.gif";

const LevelFourBCorrect = () => {
  const { name, setPlayAgain } = useContext(VolcanoContext);

  function playAgainHandler() {
    setPlayAgain(true);
  }

  return (
    <div id="levelFourBCorrect" className="level levelFourB-correct">
      <div className="animals-img">
        <img src={level4_final} alt="happy ending" />
      </div>
      <div className="sectionContainer">
        <p className="level-4b-p-1">Hello, {name}</p>
        <p className="level-4b-p-2">You did it.</p>
        <p className="level-4b-p-3">You saved all of us!</p>
        <p className="q-statement">Thank You!</p>
      </div>

      <a className="play-again" onClick={playAgainHandler} href="#levelOne">
        Play again?
      </a>
    </div>
  );
};

export default LevelFourBCorrect;
