const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

const Header = ({course}) => {
  return <h1>{course.name}</h1>
}

const Content = ({parts}) => {
  return (
  <div>
    <Part partinfo={parts.parts[0]} />
    <Part partinfo={parts.parts[1]} />
    <Part partinfo={parts.parts[2]} />
  </div>
  )
}

const Part = ({partinfo}) => {
  return <p>{partinfo.name} {partinfo.exercises}</p>
}

const Total = ({parts}) => {
  return <p>Number of exercises {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}</p>
}

export default App;
