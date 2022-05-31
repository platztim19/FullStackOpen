import react from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Countries from './Components/Countries';
import Filterinput from './Components/Filterinput';
import './App.css';

function App() {

    const [newInput,setNewInput] = useState('')
    const [countries,setNewCountries] = useState([])
    const [filtered, setNewFiltered] = useState([]) //Probably unnecessary but ehhhhh


    useEffect(() => {
      console.log('effect')
      axios 
        .get('https://restcountries.com/v3.1/all')
        .then(response => {
          console.log('promise fulfilled')
          setNewCountries(response.data)
        })
    }, [])

  return (
    <div>
      <Filterinput setNewInput ={setNewInput} newInput={newInput} filtered={filtered}  setNewFiltered={setNewFiltered} countries={countries} />
      <Countries filtered={filtered} setNewFiltered={setNewFiltered}/>
    </div>
  );
}

export default App;




//State needed:
//      1. Input field text, newInput
//      2. Total Country Data Object, countries/setNewCountries

//Components Needed:
//      1. Input field
//      2. Country Data Display. May need to be split into 3? Not sure if that will work

//API Info
//  -From https://restcountries.com, using the all endpoint

//Props Needed By Components
//      1. Input - !setNewInput! to update on change, bind value property to !newInput!
//      2. Country Display - !newInput!

//Filter Flow
//        Cases:
//        11+ Countries: Generic "2 manny" message (No Map)
//        2-10 Countries: List of Matching Countries w/ "Show" button (Mapped list items?)
//        1 Country: Show Additional Data about the one remaining country (No Map)
