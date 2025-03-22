import { useState } from 'react'
import './style.css'
import btns from './components/btns'
import BtnMaker from './components/btnMaker'
import randomNum from './components/randNum'
import Confetti from 'react-confetti'

export default function App() {

  const [buttons, setButtons] = useState(btns)

  function onRoll() {
    setButtons(data => data.map(data => !data.on ? ({ ...data, num: randomNum() }) : ({ ...data })))
  }

  function changeOn(id) {
    setButtons(data =>
      data.map(data => data.id === id ? ({ ...data, on: !data.on }) : ({ ...data }))
    )
    console.log(checker)
  }

  const checker = buttons.every(data => data.on ) && buttons.every(data => data.num === buttons[0].num)
  function reset() {
    setButtons(data => data.map(data => ({ ...data, num: randomNum(), on: false })))
  }


  const btnMap = buttons.map(data => (
    <BtnMaker
      key={data.id}
      num={data.num}
      on={data.on}
      id={data.id}
      changeOn={changeOn}
    />
  )
  )


  return (
    <section className="mainBox">
      <div className="gameBox">
        {checker && <Confetti />}
        <div className="head">
          <h1>Tenzies</h1>
          <p>Roll untill all dice are the same. Click each die to freeze it at its current value between rolls</p>
        </div>
        <div className="btnContainer">{btnMap}</div>
        <button className="rollDice" onClick={checker ? reset : onRoll}>{checker ? "Reset Game" : "Roll"}</button>
      </div>
    </section>
  )
}
