const Header = ({text}) => <h1>{text}</h1>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Course = ({course}) => {
  return (
    <div>
      <Header text={course.name} />
      {course.parts.map(part => <Part key={part.id} part={part} />)}
      <strong>total of {course.parts.reduce((a,b) => a + b.exercises,0)} exercises</strong>
    </div>
  )
}

export default Course