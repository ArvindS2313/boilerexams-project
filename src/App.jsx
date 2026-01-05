import { useState } from 'react'
import './App.css'
import ExamInfo from './components/ExamInfo'
import QuestionNumber from './components/QuestionNumber'
import QuestionText from './components/QuestionText'
import AnswerChoices from './components/AnswerChoices'
import Submit from './components/Submit'
import Flag from './components/Flag'
import Hint from './components/Hint'
import Stats from './components/Stats'

const question = "Identify the quadric surface $16 x^{2}+4 y^{2}-z^{2}-64 x+80=0$.";
const answerChoices = [
  "Hyperboloid of two sheets",
  "Ellipsoid",
  "Elliptic cone",
  "Elliptic paraboloid",
  "Hyperboloid of one sheet"
]

function App() {
  return (
    <>
      <section className="top">
        <div>
          <QuestionNumber qNum={2} />
          <ExamInfo year={2023} season="spring" type="final"/>
        </div>
      </section>
      <section className="body">
        <QuestionText q={question} />
        <AnswerChoices choices={answerChoices} />
        <div className="buttons">
          <Submit />
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

export default App
