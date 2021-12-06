//source: https://giphy.com/gifs/molangofficialpage-love-reaction-jVSROLY8bQJ07qMpRO
import level3b_animal1 from "../../assets/images/volcano/level_3b_animal_1.gif";
import level3b_animal2 from "../../assets/images/volcano/level_3b_animal_2.gif";
import level3b_animal3 from "../../assets/images/volcano/level_3b_animal_3.gif";
import { useContext } from "react";
import VolcanoContext from "../../context/VolcanoContext";

const LevelThreeB = () => {
  const { name, level_3B_result, level_3B_answer, setLevel_3B_answer } =
    useContext(VolcanoContext);

  const levelThreeAnswerHandler = (e) => {
    setLevel_3B_answer(e.target.value);
  };

  return (
    <div id="levelThreeB" className="level levelThree">
      <div className="animals-img">
        <img src={level3b_animal1} alt="animal1" />
        <img src={level3b_animal2} alt="animal2" />
        <img src={level3b_animal3} alt="animal3" />
      </div>
      <div className="sectionContainer">
        <p className="level-3b-p-1">Not bad, {name}!</p>
        <p className="level-3b-p-2">You got a small and unstable...raft...</p>
        <p className="level-3b-p-3">Anyway, more to come. </p>
        <p className="q-statement">Can you save them?</p>
        <p className="question">What is number after {level_3B_result}?</p>
        <input
          className="input-answer"
          onChange={levelThreeAnswerHandler}
          type="text"
          value={level_3B_answer}
        />
      </div>

      {level_3B_answer && (
        <a
          className="nextLevel"
          href={
            Number(level_3B_answer) === level_3B_result + 1
              ? "#levelFourBCorrect"
              : "#levelFourBIncorrect"
          }
        >
          &#9660;
        </a>
      )}
    </div>
  );
};

export default LevelThreeB;
