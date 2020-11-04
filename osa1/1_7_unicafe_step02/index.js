import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const PrimaryHeading = ({ content }) => <h1>{content}</h1>;

const SecondaryHeading = ({ content }) => <h2>{content}</h2>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Stat = ({ text, stat }) => (
  <p>
    {text} {stat}
  </p>
);

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const averageSum = ((good - bad) / all).toFixed(2);
  const positiveSum = ((good / all) * 100).toFixed(2);

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
      <SecondaryHeading content='Statistics' />
      <Stat text='Good' stat={good} />
      <Stat text='Neutral' stat={neutral} />
      <Stat text='Bad' stat={bad} />
      <Stat text='ALL' stat={all} />
      <hr />
      <Stat text='Average' stat={averageSum} />
      <Stat text='Positive' stat={positiveSum + ' %'} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
