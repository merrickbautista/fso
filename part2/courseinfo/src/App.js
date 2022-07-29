import { useState } from 'react'

const Anecdote = ({ text, vote_count }) =>
  <>
    {text} 
    <div>
      has {vote_count} votes
    </div>
  </>

const Header = ({text}) => <h1>{text}</h1>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Course = ({course}) => {
  return (
    <div>
      <Header text={course.name} />
      {course.parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}


export default App