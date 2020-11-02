import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Counter komponentti, tulostaa divin, johon tulostuu arvo, jota käytetään + ja - painikkeesta
const Display = ({ counter }) => <div>{counter}</div>;

// Button komponentti
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = (props) => {
  // Tilan asettaminen
  const [counter, setCounter] = useState(0);

  // Click funktiot
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='+' />
      <Button handleClick={decreaseByOne} text='-' />
      <Button handleClick={reset} text='reset' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
