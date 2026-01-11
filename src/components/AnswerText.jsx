import "./components.css";
import {MathJax, MathJaxContext} from "better-react-mathjax";

const CONFIG = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
    }
}

export default function AnswerText({ind, txt, correctAns, isSelected, changeSelect, 
                                            applyIncorrectStyle, applyCorrectStyle}) {
    const updateStyle = () => {
        if (applyIncorrectStyle && isSelected) {
            return {backgroundColor: "rgb(255, 99, 71)"};
        } else if (applyCorrectStyle && correctAns === ind) {
            return {backgroundColor: "rgb(144, 238, 144)"};
        } else if (isSelected) {
            return {backgroundColor: "rgb(14, 202, 223)"};
        } else {
            return {};
        }
    }

    return <div id="answer-text" onClick={changeSelect} >
        <p style={updateStyle()}>
            <MathJaxContext config={CONFIG}>
                <MathJax>{txt}</MathJax>
            </MathJaxContext>
        </p>
    </div>;
}