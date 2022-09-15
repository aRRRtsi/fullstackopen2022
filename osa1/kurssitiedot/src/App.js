const App = () => {
  const course = 'Half Stack application development'
  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10

  const part1obj = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = 'Using props to pass data'
  const exercises2 = 7

  const part2obj = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = 'State of a component'
  const exercises3 = 14
  
  const part3obj = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )

}

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
  return (
  <div>
   <Part part={part1} exercise={exercises1} />
   <Part part={part2} exercise={exercises2} />
   <Part part={part3} exercise={exercises3} />
  </div>
  )
}

const Part = ({part, exercise}) => {
  return (
    <p>{part} {exercise}</p>
  )
}

const Total = ({total}) => {
  return (
   <p>Number of exercises {total}</p>
  )
}

export default App;
