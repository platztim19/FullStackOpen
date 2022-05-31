import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Filter,Form,Persons} from './components/index'

const App = () => {

  //State
  const [persons, setPersons] = useState([])
  const[newName,setNewName] = useState('')
  const[newNumber,setNewNumber] = useState('')
  const[newFilter,setNewFilter] = useState('')

  //Request persons data from db.json, setPersons to the new data if available
  useEffect(() => {
    console.log('effect')

    axios.get('http://localhost:3001/persons').then(response => {
    console.log('promise fulfilled')
    setPersons(response.data)

    
    })
  }, []) //Don't forget the signifier for when to use effect. 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNewFilter={setNewFilter} /> 
      
      <h2>Add a New Person</h2>
      <Form newName={newName} newNumber={newNumber} persons={persons}
            setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons} />
      
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
      
    </div>
  )
}

export default App;
