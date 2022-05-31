const Form = ({newName,newNumber,persons,setNewName,setNewNumber,setPersons}) => {

    const nameInputChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    
    const numberInputChange = (ev) => {
        console.log(ev.target.value)
        setNewNumber(ev.target.value)
    }

    const buttonSubmit = (e) => {
        e.preventDefault()
        const temparr = [...persons]
        const tempperson = {name: newName, number: newNumber}
        console.log(temparr)
        temparr.push(tempperson)
    
        if(persons.find((ele) => ele.name===newName) === undefined){
          setPersons(temparr)
        } else {
          alert(`${newName} already added`)
        }
        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
            <form>
                <div>
                    name: <input id = 'nameInput' onChange={nameInputChange} value={newName}></input>
                </div>
                <div>
                    number: <input id = 'numberInput' onChange={numberInputChange} value={newNumber}></input>
                </div>
                <div>
                    <button id= 'addPersonButton' onClick={buttonSubmit}>add</button>
                </div>
            </form>
        </div>
    )
}

export default Form;