import Button from './Button.js'
import Country from './Country.js'


const Countries = ({filtered, setNewFiltered}) => {

    let x = filtered.length
    console.log(x)
    if(x === 1){
        return (
            <div>
                <Country filtered={filtered} />
            </div>
        )
    } else if (1 < x && x < 11){
        return (
            <div>
                {filtered.map(country =>
                <li key={country.name.common}>{country.name.official} <Button name={country.name.official} filtered={filtered} setNewFiltered={setNewFiltered} /></li> )}
            </div>
        )
    } else if(x === 0){
        return (
            <div>
                No matching countries
            </div>
        )
    } else {
        return(
            <div>
                More than 10 matching countries, please narrow your search
            </div>
        )
    }
}

export default Countries