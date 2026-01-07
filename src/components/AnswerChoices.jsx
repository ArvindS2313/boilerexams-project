import { useState } from "react";
import "./components.css";
import Choice from "./Choice.jsx";

export default function AnswerChoices({ choices }) {
  const choicesObj = choices.map((ch, i) => ({ ind: i, txt: ch }));
  let [selected, setSelected] = useState(null);
  return (
    <div id="answer-choices">
      {choicesObj.map((obj, i) => (
        <Choice
          key={i}
          choice={obj}
          setSelected={setSelected}
          isSelected={selected === i}
        />
      ))}
    </div>
  );
}
