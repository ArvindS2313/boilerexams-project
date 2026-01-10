export default function Letter({ind, isSelected, correctAns, changeSelect, 
                                    applyIncorrectStyle, applyCorrectStyle}) {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const txt = letters[ind];
    const updateStyle = () => {
        if (applyIncorrectStyle && isSelected) {
            return {backgroundColor: "rgba(255, 99, 71, 0.537)"};
        } else if (applyCorrectStyle && correctAns === ind) {
            return {backgroundColor: "rgba(144, 238, 144, 0.537)"};
        } else if (isSelected) {
            return {backgroundColor: "rgba(14, 202, 223, 0.537)"};
        } else {
            return {};
        }
    }
    return <div id="letter"><button onClick={changeSelect} style={updateStyle()}>{txt}</button></div>
}