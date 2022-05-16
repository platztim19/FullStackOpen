const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
    </div>
  )
}

const App = () => {
  
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" age={25 + 10} />
      <Hello name="Daisy" age="55" />
    </div>
  )
}

export default App