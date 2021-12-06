//source: pusheen.com
import level3a_animal1 from "../../assets/images/volcano/level_3a_animal_1.gif";
import level3a_animal2 from "../../assets/images/volcano/level_3a_animal_2.gif";
import level3a_animal3 from "../../assets/images/volcano/level_3a_animal_3.gif";
import level3a_animal4 from "../../assets/images/volcano/level_3a_animal_4.gif";
import level3a_animal5 from "../../assets/images/volcano/level_3a_animal_5.gif";
import level3a_animal6 from "../../assets/images/volcano/level_3a_animal_6.gif";
import { useContext } from "react";
import VolcanoContext from "../../context/VolcanoContext";

const LevelThreeA = () => {
  const { name, level_3A_result, level_3A_answer, setLevel_3A_answer } =
    useContext(VolcanoContext);

  const levelThreeAnswerHandler = (e) => {
    setLevel_3A_answer(e.target.value);
  };

  return (
    <div id="levelThreeA" className="level levelThree">
      <div className="animals-img">
        <img src={level3a_animal1} alt="animal1" />
        <img src={level3a_animal2} alt="animal2" />
        <img src={level3a_animal3} alt="animal3" />
        <img src={level3a_animal4} alt="animal4" />
        <img src={level3a_animal5} alt="animal5" />
        <img src={level3a_animal6} alt="animal6" />
      </div>
      <div className="sectionContainer">
        <p className="level-3a-p-1">Excellent, {name}!</p>
        <p className="level-3a-p-2">You got a boat.</p>

        <p className="q-statement">But... can you save them?</p>
        <p className="question">What is number after {level_3A_result}?</p>
        <input
          className="input-answer"
          onChange={levelThreeAnswerHandler}
          type="text"
          value={level_3A_answer}
        />
      </div>

      {level_3A_answer && (
        <a
          className="nextLevel"
          href={
            Number(level_3A_answer) === level_3A_result + 1
              ? "#levelFourACorrect"
              : "#levelFourAIncorrect"
          }
        >
          &#9660;
        </a>
      )}
    </div>
  );
};

export default LevelThreeA;
