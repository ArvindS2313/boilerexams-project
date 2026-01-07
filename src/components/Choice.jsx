import {useState} from "react";
import Letter from './Letter.jsx';
import AnswerText from './AnswerText.jsx';
import "./components.css";

export default function Choice({choice, setSelected, isSelected}) {
    const {ind, txt} = choice;
    const changeSelect = () => {
        if (isSelected) {
            setSelected(null);
        } else {
            setSelected(ind);
        }
    }

    return <div id="choice">
        <Letter ind={ind} isSelected={isSelected} changeSelect={changeSelect}/>
        <AnswerText ind={ind} txt={txt} isSelected={isSelected} changeSelect={changeSelect} />
    </div>
}