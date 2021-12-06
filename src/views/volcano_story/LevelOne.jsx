import { useContext } from "react";
import VolcanoContext from "../../context/VolcanoContext";
import volcano from "../../assets/images/volcano/volcano.gif"; //source: https://www.icegif.com/volcano-16/

const LevelOne = () => {
  const { name, setName } = useContext(VolcanoContext);

  const levelOneAnswerHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div id="levelOne" className="level levelOne">
      <img className="volcano-img" src={volcano} alt="volcano" />
      <div className="sectionContainer">
        <p className="level-1-p-1">This is the story about volcano, animals,</p>
        <p className="level-1-p-2">and you...</p>
        <p className="q-statement level-1-q-statement">So...</p>
        <p className="question level-1-Q1">
          what is your name?<span className="level-1-Q1-effect"></span>
        </p>
        <input
          onChange={levelOneAnswerHandler}
          className="input-answer level-1-answer"
          type="text"
          value={name}
        />
      </div>
      {name && (
        <a className="nextLevel" href="#levelTwo">
          &#9660;
        </a>
      )}
    </div>
  );
};

export default LevelOne;
