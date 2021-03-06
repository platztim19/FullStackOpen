const Persons = ({persons, newFilter}) => {
    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
            .map(person => 
            <p key={person.name}>
                {person.name}, {person.number}
            </p>)}
        </div>
    )
}

export default Persons