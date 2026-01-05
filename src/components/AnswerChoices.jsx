import Choice from '../Choice.jsx';

export default function AnswerChoices({choices}) { 
    const choicesObj = choices.map((ch, i) => ({ind: i, txt: ch}));
    return <div>
        {choicesObj.map((obj, i) => <Choice key={i} choice={obj} />)}
    </div>
}