export default function Submit({selectedAns, setApplyIncorrectStyle, setApplyCorrectStyle, correctAns}) {
    const evaluateAns = () => {
        if (selectedAns === correctAns) {
            console.log("correct!");
            setApplyCorrectStyle(true);
        } else {
            console.log("incorrect!");
            setApplyIncorrectStyle(true);
        }
    }
    const setDisabled = () => {
        return selectedAns === null;
    }
    return <button className="Submit" onClick={evaluateAns} disabled={setDisabled()} >Submit</button>
}