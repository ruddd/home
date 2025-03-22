import '../style.css'

export default function BtnMaker({ num, on, id, changeOn }) {
  return (
    <button
      className={`btn ${on ? "on" : ""}`}
      onClick={() => changeOn(id)}
    >{num}
    </button>
  )
}
