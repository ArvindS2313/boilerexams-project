export default function Letter({ind, isSelected, changeSelect}) {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const txt = letters[ind];
    let styles = {backgroundColor: isSelected ? "rgba(14, 202, 223, 0.57)" : ""};
    return <div id="letter"><button onClick={changeSelect} style={styles}>{txt}</button></div>
}