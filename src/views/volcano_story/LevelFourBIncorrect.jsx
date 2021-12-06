import { useContext } from "react";

import VolcanoContext from "../../context/VolcanoContext";
import level4_final from "../../assets/images/volcano/level_4b_incorrect.gif";

const LevelFourBIncorrect = () => {
  const { name, level_4B_answer, setLevel_4B_answer } =
    useContext(VolcanoContext);

  const levelFourBAnswerHandler = (e) => {
    setLevel_4B_answer(e.target.value);
  };

  return (
    <div id="levelFourBIncorrect" className="level levelFourB-incorrect">
      <div className="animals-img">
        <img src={level4_final} alt="happy ending" />
      </div>
      <div className="sectionContainer">
        <p className="level-4b-p-2">
          Oops...<span className="level-4b-name">{name}</span>, you saved only
          two of them!
        </p>
        <p className="level-4b-p-3">Hero, save the last animal!</p>
        <p className="q-statement">Tell me </p>
        <p className="question">what is your name again?</p>
        <input
          className="input-answer"
          onChange={levelFourBAnswerHandler}
          type="text"
          value={level_4B_answer}
        />
      </div>

      {name === level_4B_answer && (
        <a className="nextLevel" href="#levelFiveB">
          &#9660;
        </a>
      )}
    </div>
  );
};

export default LevelFourBIncorrect;
