const Filterinput = ({setNewInput,newInput, filtered, setNewFiltered, countries}) => {

    const inputHandler = (e) => {
        console.log('updating input filter state')
        setNewInput(e.target.value)
        updateFilter(e.target.value)
    }

    const updateFilter = (current) => {
        console.log(current)
        setNewFiltered(
                countries.filter(country => 
                    country.name.official.toLowerCase().includes(current.toLowerCase()) === true
                )
        )
        console.log(filtered)
    }


    return(
        <div>
            Filter Countries: <input onChange={inputHandler} value={newInput} />
        </div>
    )
}

export default Filterinput