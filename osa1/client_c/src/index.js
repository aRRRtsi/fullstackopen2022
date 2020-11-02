import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
  // Vakiot ja muuttujat
  // const name = props.name;
  // const age = props.age;

  // Vakiot ja muuttujat parempi tapa
  // const { name, age } = props;

  // Vakiot ja muuttujat
  // -----------> (props) tilalla

  // Syntymävuosi funktio
  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear();
  //   return yearNow - age;
  // };

  // Syntymävuosi funktio refaktoroituna
  // const bornYear = () => {
  //   return new Date().getFullYear() - age;
  // };

  // Syntymävuosi funktio edelleen refaktoroituna
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const nimi = 'Pekka';
  const ika = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
