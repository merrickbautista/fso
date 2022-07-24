import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Statistics = ({text, number, extra=''}) => <div>{text} {number} {extra}</div>

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
      <Statistics text='good' number={good} />
      <Statistics text='neutral' number={neutral} />
      <Statistics text='bad' number={bad} />
      <Statistics text='all' number={good+neutral+bad} />
      <Statistics text='average' number={(good-bad)/(good+neutral+bad)} />
      <Statistics text='positive' number={good*100/(good+neutral+bad)} extra='%'/> 
    </div>
  )
}

export default App