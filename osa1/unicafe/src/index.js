import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  )
}

const Statistics = (props) => {
  let good = props.good
  let neutral = props.neutral
  let bad = props.bad
  let sum = good + neutral + bad
  let positive = good / sum * 100 + " %"

  if (sum > 0) {
    return (
      <table>
        <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={sum}/>
        <StatisticLine text="average" value={(good - bad) / sum}/>
        <StatisticLine text="positive" value={positive}/>
        </tbody>
      </table>
      
    )
  } else {
    return (
      <p>
        No feedback given
      </p>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = (value) => {
    setGood(value)
  }

  const setNeutralValue = (value) => {
    setNeutral(value)
  }

  const setBadValue = (value) => {
    setBad(value)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGoodValue(good + 1)} text="good"/>
      <Button handleClick={() => setNeutralValue(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBadValue(bad + 1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))