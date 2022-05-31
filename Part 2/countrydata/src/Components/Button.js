const Button = ({name,filtered, setNewFiltered}) => {

    const buttonFilterUpdate = () => {
            setNewFiltered(
                filtered.filter(country =>
                    country.name.official === name
                )
            )
    }

    return (
        <div>
            <button key={'button' + name} onClick={buttonFilterUpdate} >Show</button>
        </div>
    )
}

export default Button