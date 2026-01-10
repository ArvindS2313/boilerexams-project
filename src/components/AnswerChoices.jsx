import { useState } from "react";
import "./components.css";
import Choice from "./Choice.jsx";

export default function AnswerChoices({ choices, correctAns, selectedAns, setSelectedAns, 
                                        applyIncorrectStyle, setApplyIncorrectStyle, 
                                        applyCorrectStyle }) {
  const choicesObj = choices.map((ch, i) => ({ ind: i, txt: ch }));
  return (
    <div id="answer-choices">
      {choicesObj.map((obj, i) => (
        <Choice
          key={i}
          choice={obj}
          correctAns={correctAns}
          setSelected={setSelectedAns}
          isSelected={selectedAns === i}
          applyIncorrectStyle={applyIncorrectStyle}
          setApplyIncorrectStyle={setApplyIncorrectStyle}
          applyCorrectStyle={applyCorrectStyle}
        />
      ))}
    </div>
  );
}
