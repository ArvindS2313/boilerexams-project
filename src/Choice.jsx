import Letter from './components/Letter.jsx';
import AnswerText from './components/AnswerText.jsx';

export default function Choice({choice}) {
    const {ind, txt} = choice;
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    return <div className="Choice">
        <Letter txt={letters[ind]} />
        <AnswerText txt={txt} />
    </div>
}