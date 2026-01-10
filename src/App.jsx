import axios from 'axios';
import {useState } from 'react'
import './App.css'
import ExamInfo from './components/ExamInfo'
import QuestionNumber from './components/QuestionNumber'
import QuestionText from './components/QuestionText'
import AnswerChoices from './components/AnswerChoices'
import Submit from './components/Submit'
import Flag from './components/Flag'
import Hint from './components/Hint'
import Stats from './components/Stats'
import IDInput from './components/IDInput'

function App() {
  let [displayQuestion, setDisplayQuestion] = useState(false);
  let [displayError, setDisplayError] = useState(false);
  let [loading, setLoading] = useState(false);
  let [id, setId] = useState("");
  let [data, setData] = useState({});
  let [selectedAns, setSelectedAns] = useState(null);
  let [applyIncorrectStyle, setApplyIncorrectStyle] = useState(false);
  let [applyCorrectStyle, setApplyCorrectStyle] = useState(false);

  const fetchData = async (id) => {
    console.log("Fetching data for ID: ", id);
    setLoading(true);
    setDisplayError(false);
    try {
      const response = await axios.get(`/api/question?id=${id}`);
      const data = response.data;
      setDisplayQuestion(true);
      setData(cleanData(data));
    } catch (err) {
      setDisplayError(true);
    } finally {
      setLoading(false);
    }
  }

  const cleanData = (data) => {
    const cleanData = {};
    cleanData.question = data.data.body;
    cleanData.qNum = data.number;
    cleanData.year = data.exam.year;
    cleanData.season = (data.exam.season).toLowerCase();
    cleanData.type = data.exam.type === 0 ? "final" : (data.exam.type === 1 ? "midterm 1" : "midterm 2");
    cleanData.choices = data.data.answerChoices.map(choice => choice.body);
    cleanData.correctAns = data.data.solution[0];

    console.log(cleanData);
    return cleanData;
  }

  if (!displayQuestion) {
    return <div>
      <IDInput id={id} setId={setId} onSubmit={fetchData} loading={loading}
                displayError={displayError} setDisplayError={setDisplayError} />
    </div>
  }

  return (
    <>
      <IDInput id={id} setId={setId} onSubmit={fetchData} loading={loading}
                  displayError={displayError} setDisplayError={setDisplayError} />
      <section className="top">
        <div>
          <QuestionNumber qNum={data.qNum} />
          <ExamInfo year={data.year} season={data.season} type={data.type}/>
        </div>
      </section>
      <section className="body">
        <QuestionText q={data.question} />
        <AnswerChoices choices={data.choices} 
                      correctAns={data.correctAns}
                      selectedAns={selectedAns} 
                      setSelectedAns={setSelectedAns} 
                      applyIncorrectStyle={applyIncorrectStyle}
                      setApplyIncorrectStyle={setApplyIncorrectStyle}
                      applyCorrectStyle={applyCorrectStyle}
                      setApplyCorrectStyle={setApplyCorrectStyle}
                      />
        <div className="buttons">
          <Submit selectedAns={selectedAns} 
                  setApplyIncorrectStyle={setApplyIncorrectStyle} 
                  setApplyCorrectStyle={setApplyCorrectStyle}
                  correctAns={data.correctAns} />
          <div className="info-btns">
            <Flag />
            <Hint />
            <Stats />
          </div>
        </div>
      </section>
    </>
  )
}

export default App;
