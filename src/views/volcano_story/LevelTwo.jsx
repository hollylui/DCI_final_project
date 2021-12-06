import boat from "../../assets/images/volcano/level_2_boat.gif"; //source: https://cdn.dribbble.com/users/46375/screenshots/1742856/ripples.gif

import { useContext } from "react";
import VolcanoContext from "../../context/VolcanoContext";

const LevelTwo = () => {
  const {
    name,
    level_2_numOne,
    level_2_numTwo,
    level_2_result,
    setLevel_2_result,
    level_2_answer,
    setLevel_2_answer,
  } = useContext(VolcanoContext);

  setLevel_2_result(level_2_numOne + level_2_numTwo);

  const levelTwoAnswerHandler = (e) => {
    setLevel_2_answer(e.target.value);
  };

  return (
    <div id="levelTwo" className="level levelTwo">
      <div className="animals-img">
        <img src={boat} alt="boat" />
      </div>
      <div className="sectionContainer">
        <p className="level-2-p-1">{name}, volcano is exploding.</p>
        <p className="level-2-p-2">
          Hurry, save all animals and escape this island
        </p>
        <p className="level-2-p-3">
          with boat or...<span>with raft...</span>
        </p>

        <p className="q-statement">It is your choice...</p>
        <p className="question">
          What is {level_2_numOne} + {level_2_numTwo}?
        </p>

        <input
          className="input-answer"
          onChange={levelTwoAnswerHandler}
          type="text"
          value={level_2_answer}
        />
      </div>
      {level_2_answer && (
        <a
          className="nextLevel"
          level_2_numTwo
          href={
            Number(level_2_answer) === level_2_result
              ? "#levelThreeA"
              : "#levelThreeB"
          }
        >
          &#9660;
        </a>
      )}
    </div>
  );
};

export default LevelTwo;
