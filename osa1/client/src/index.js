import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const PrimaryHeading = ({ content }) => <h1>{content}</h1>;

const SecondaryHeading = ({ content }) => <h2>{content}</h2>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// Statistics component
const Statistics = (props) => {
  const averageSum = ((props.good - props.bad) / props.all).toFixed(2);
  const positiveSum = ((props.good / props.all) * 100).toFixed(2);

  return (
    <section>
      <SecondaryHeading content='Statistics' />
      <p>Good {props.good}</p>
      <Stat text='Good' stat={props.good} />
      <Stat text='Neutral' stat={props.neutral} />
      <Stat text='Bad' stat={props.bad} />
      <Stat text='ALL' stat={props.all} />
      <hr />
      <Stat text='Average' stat={averageSum} />
      <Stat text='Positive' stat={positiveSum + ' %'} />
    </section>
  );
};

// Stat component
const Stat = ({ text, stat }) => (
  <p>
    {text} {stat}
  </p>
);

// APP component
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <PrimaryHeading content='Give Feedback' />
      <Button handleClick={handleClickGood} text='Good' />
      &nbsp;
      <Button handleClick={handleClickNeutral} text='Neutral' />
      &nbsp;
      <Button handleClick={handleClickBad} text='Bad' />
      &nbsp;
      <Statistics />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
