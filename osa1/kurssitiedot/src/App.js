const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = ({parts}) => {
  return (
  <div>
    <Part partinfo={parts[0]} />
    <Part partinfo={parts[1]} />
    <Part partinfo={parts[2]} />
  </div>
  )
}

const Part = ({partinfo}) => {
  return <p>{partinfo.name} {partinfo.exercises}</p>
}

const Total = ({parts}) => {
  return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
}

export default App;
