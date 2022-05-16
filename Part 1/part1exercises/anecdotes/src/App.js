import { useState } from 'react'
import './App.css';

const Button = ({clickHandler,text}) => (
  <button onClick={clickHandler}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const point = []
  let x=0;

  while(x<anecdotes.length){
    point[x] = 0
    x++
  }


  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(point)
  const [maxInd, setMaxInd] = useState(0)

  const randQuote = () => {
    console.log('hello')
    let rand = Math.floor(Math.random()*anecdotes.length)
    while(rand===selected){
      rand = Math.floor(Math.random()*anecdotes.length)
    console.log('Go Again')
    }
    setSelected(rand)
  }

  const vote = () => {
    const copyPoints = [...points]
    copyPoints[selected] = points[selected] + 1
    setPoints(copyPoints)

    let max = Math.max(...copyPoints);
    for(let y=0;y<copyPoints.length;y++) {
      if(copyPoints[y] == max){
        setMaxInd(y)
        console.log('Setting maxInd to ' + y)
      
      }
    }
  }
  
  return (
    <div className="App">
      <div>
        <h3>Anecdote of the Day</h3>
        {anecdotes[selected]}<br/>
        has {points[selected]} votes
      </div>
      <Button clickHandler={vote} text='Vote' />
      <Button clickHandler={randQuote} text='Reroll Quote' />
      <h3>Top Anecdote</h3>
      {anecdotes[maxInd]} <br/>
      has {points[maxInd]} votes
    </div>
  );
}

export default App;
