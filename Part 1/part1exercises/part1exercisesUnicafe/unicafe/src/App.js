import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good,neutral,bad}) => {
  let average = 0
  let posPercent = 0
  let total = good+bad+neutral

  if(total!= 0){
    average = ((good-bad)/total).toFixed(2)
    posPercent= ((good/total) * 100).toFixed(2)
  } else {
    return (
      <p>No Feedback given</p>
    )
  }

  return (
    <div id='stateBox'>
      <h3>Statistics</h3>
      <table>
        <tbody>
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='Total' value={total} />
          <StatisticLine text='Average Rating' value={average} />       
          <StatisticLine text='Percentage Positive Reviews' value={posPercent + '%'} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({text,value}) => (
  <tr>
    <td>{text}</td><td>{value}</td>
  </tr>
)



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let average = 0
  let posPercent = 0
  let total = good+bad+neutral

  if(total!= 0){
    average = ((good-bad)/total).toFixed(2)
    posPercent= ((good/total) * 100).toFixed(2)
  }

  return (
    <div className="App">
      <h2>Give Feedback</h2>
      <div id='buttonBox'>
        <Button handleClick={() => setGood(good+1)} text='Good' />
        <Button handleClick={() => setNeutral(neutral+1)} text='Neutral' />
        <Button handleClick={() => setBad(bad+1)} text='Bad' />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
