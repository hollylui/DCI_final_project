import { useContext } from "react";

import VolcanoContext from "../../context/VolcanoContext";
import level4_final from "../../assets/images/volcano/level_4a_incorrect.gif";

const LevelFourAIncorrect = () => {
  const { name, level_4A_answer, setLevel_4A_answer } =
    useContext(VolcanoContext);

  const levelFourAAnswerHandler = (e) => {
    setLevel_4A_answer(e.target.value);
  };

  return (
    <div id="levelFourAIncorrect" className="level levelFourA-incorrect">
      <div className="animals-img">
        <img src={level4_final} alt="happy ending" />
      </div>
      <div className="sectionContainer">
        <p className="level-4a-p-1">Hello, {name}</p>
        <p className="level-4a-p-2">
          You did it. Although... not all animals...
        </p>
        <p className="level-4a-p-3">How about save the last animal?</p>
        <p className="q-statement">Do you know what is 1 + 1 + 1 + 1 + 1?</p>
        <input
          className="input-answer"
          onChange={levelFourAAnswerHandler}
          type="text"
          value={level_4A_answer}
        />
      </div>

      {Number(level_4A_answer) === 5 && (
        <a className="nextLevel" href="#levelFiveA">
          &#9660;
        </a>
      )}
    </div>
  );
};

export default LevelFourAIncorrect;
