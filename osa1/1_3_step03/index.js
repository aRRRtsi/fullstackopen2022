import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log('Header' + props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  console.log('Part' + props);
  return (
    <>
      <p>
        {props.partNumber} {props.partExercises}
      </p>
    </>
  );
};

const Total = (props) => {
  console.log('Total' + props);
  return (
    <>
      <p>Number of exercises {props.totalCount}</p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development';

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Part partNumber={part1.name} partExercises={part1.exercises} />
      <Part partNumber={part2.name} partExercises={part2.exercises} />
      <Part partNumber={part3.name} partExercises={part3.exercises} />
      <Total totalCount={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
