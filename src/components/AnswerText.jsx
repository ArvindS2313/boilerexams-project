import "./components.css";

export default function AnswerText({ind, txt, isSelected, changeSelect}) {
    let styles = {backgroundColor: isSelected ? "rgb(14, 202, 223)" : ""};
    return <div id="answer-text" onClick={changeSelect} ><p style={styles}>{txt}</p></div>;
}