import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Stat = ({text, number, extra=''}) => <div>{text} {number} {extra}</div> 

const Statistics = ({good,neutral,bad,all}) => {
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <Stat text='good' number={good} />
      <Stat text='neutral' number={neutral} />
      <Stat text='bad' number={bad} />
      <Stat text='all' number={all} />
      <Stat text='average' number={(good-bad)/all} />
      <Stat text='positive' number={good*100/all} extra='%' />
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />
      <Button
        onClick={() => setGood(good + 1)}
        text='good'
      />
      <Button
        onClick={() => setNeutral(neutral + 1)}
        text='neutral'
      />
      <Button
        onClick={() => setBad(bad + 1)}
        text='bad'
      />
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} all={good+neutral+bad} />
    </div>
  )
}

export default App