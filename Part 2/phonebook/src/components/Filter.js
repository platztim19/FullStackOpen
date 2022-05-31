const Filter = ({setNewFilter}) => {

    const filterInputChange = (filterE) => {
        setNewFilter(filterE.target.value)
      }

    return (
        <div>
            Filter Names: <input id='filterInput' onChange = {filterInputChange}></input>
        </div>
    )
}

export default Filter;