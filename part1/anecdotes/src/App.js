import { useState } from "react"

const Header = ({text}) => (
  <h1>
    {text}
  </h1>
)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [votes, setVotes] = useState(anecdotes.map(() => 0))
  const [max, setMax] = useState(0)

  const upVote = (selected) => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    setMax(copy.indexOf(Math.max(...copy)))
  }

  return (
    <div>
      <Header text='Anecdote of the day' />
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button
        onClick={() => upVote(selected)}
        text='vote'
      />
      <Button
        onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}
        text='next anecdote'
      />
      <Header text='Anecdote with most votes' />
      <div>{anecdotes[max]}</div>
      <div>has {votes[max]} votes</div>
    </div>
  )
}

export default App
