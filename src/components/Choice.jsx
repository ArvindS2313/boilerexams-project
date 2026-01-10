import Letter from './Letter.jsx';
import AnswerText from './AnswerText.jsx';
import "./components.css";

export default function Choice({choice, correctAns, setSelected, isSelected, 
                                applyIncorrectStyle, setApplyIncorrectStyle, 
                                applyCorrectStyle}) {
    const {ind, txt} = choice;
    const changeSelect = () => {
        setApplyIncorrectStyle(false);
        if (isSelected) {
            setSelected(null);
        } else {
            setSelected(ind);
        }
    }

    return <div id="choice">
        <Letter ind={ind} isSelected={isSelected} 
                correctAns={correctAns}
                changeSelect={changeSelect}
                applyIncorrectStyle={applyIncorrectStyle}
                applyCorrectStyle={applyCorrectStyle}
        />
        <AnswerText ind={ind} txt={txt}
                    correctAns={correctAns}
                    isSelected={isSelected} 
                    changeSelect={changeSelect}
                    applyIncorrectStyle={applyIncorrectStyle}
                    applyCorrectStyle={applyCorrectStyle}
        />
    </div>
}