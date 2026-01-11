import "./components.css";
import {MathJax, MathJaxContext} from "better-react-mathjax";

const CONFIG = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
    }
}

export default function QuestionText({q}) {
    return <div id="question-text">
        <p>
            <MathJaxContext config={CONFIG}>
                <MathJax>{q}</MathJax>
            </MathJaxContext>
        </p>
    </div>
}