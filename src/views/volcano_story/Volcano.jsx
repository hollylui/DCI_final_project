import { useState, useEffect } from "react";
import VolcanoContext from "../../context/VolcanoContext";
import LevelOne from "./LevelOne";
import LevelTwo from "./LevelTwo";
import LevelThreeA from "./LevelThreeA";
import LevelThreeB from "./LevelThreeB";
import LevelFourACorrect from "./LevelFourACorrect";
import LevelFourAIncorrect from "./LevelFourAIncorrect";
import LevelFourBCorrect from "./LevelFourBCorrect";
import LevelFourBIncorrect from "./LevelFourBIncorrect";
import LevelFiveB from "./Level5B";
import LevelFiveA from "./Level5A";

const Volcano = () => {
  const [name, setName] = useState("");

  //level 1
  const [level_1_answer, setLevel_1_answer] = useState("");

  // level 2
  const levelTwoRandowNumOne = Math.floor(Math.random() * 5);
  const levelTwoRandowNumTwo = Math.floor(Math.random() * 5);

  const [level_2_numOne, setLevel_2_numOne] = useState(levelTwoRandowNumOne);
  const [level_2_numTwo, setLevel_2_numTwo] = useState(levelTwoRandowNumTwo);
  const [level_2_result, setLevel_2_result] = useState("");
  const [level_2_answer, setLevel_2_answer] = useState("");

  //level 3
  const level_3_randomNum = Math.floor(Math.random() * 10);
  const [level_3A_result, setLevel_3A_result] = useState(level_3_randomNum);
  const [level_3A_answer, setLevel_3A_answer] = useState("");
  const [level_3B_result, setLevel_3B_result] = useState(level_3_randomNum);
  const [level_3B_answer, setLevel_3B_answer] = useState("");

  //level 4
  const [level_4A_answer, setLevel_4A_answer] = useState("");
  const [level_4B_answer, setLevel_4B_answer] = useState("");

  // play again
  const [playAgain, setPlayAgain] = useState(false);

  //reset the game
  function reset() {
    setLevel_1_answer("");

    setLevel_2_numOne(Math.ceil(Math.random() * 5));
    setLevel_2_numTwo(Math.ceil(Math.random() * 5));
    setLevel_2_result("");
    setLevel_2_answer("");

    setLevel_3A_result(Math.ceil(Math.random() * 10));
    setLevel_3A_answer("");
    setPlayAgain(false);
  }

  useEffect(() => {
    reset();
  }, [playAgain]);

  const volcanoProps = {
    name,
    setName,

    level_1_answer,
    setLevel_1_answer,

    level_2_numOne,
    setLevel_2_numOne,
    level_2_numTwo,
    setLevel_2_numTwo,
    level_2_result,
    setLevel_2_result,
    level_2_answer,
    setLevel_2_answer,

    level_3A_result,
    setLevel_3A_result,
    level_3A_answer,
    setLevel_3A_answer,
    level_3B_result,
    setLevel_3B_result,
    level_3B_answer,
    setLevel_3B_answer,

    level_4A_answer,
    setLevel_4A_answer,
    level_4B_answer,
    setLevel_4B_answer,

    playAgain,
    setPlayAgain,
  };

  return (
    <VolcanoContext.Provider value={{ ...volcanoProps }}>
      <LevelOne />
      <LevelTwo />

      {Number(level_2_answer) === level_2_result ? (
        <LevelThreeA />
      ) : (
        <LevelThreeB />
      )}

      {Number(level_3A_answer) === level_3A_result + 1 ? (
        <LevelFourACorrect />
      ) : (
        <LevelFourAIncorrect />
      )}
      {Number(level_3B_answer) === level_3B_result + 1 ? (
        <LevelFourBCorrect />
      ) : (
        <LevelFourBIncorrect />
      )}

      {level_3A_answer && <LevelFiveA />}
      {level_3B_answer && <LevelFiveB />}
    </VolcanoContext.Provider>
  );
};

export default Volcano;
