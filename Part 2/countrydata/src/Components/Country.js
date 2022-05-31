import axios from "axios"
import { useState, useEffect } from 'react';


const Country = ({filtered}) => {

    const[weather,setWeather] = useState('')

    let obj = Object.values(filtered[0].capitalInfo.latlng)
    let lat = obj[0].toString()
    let lng = obj[1].toString()
    const apiKey = process.env.REACT_APP_API_KEY.toString()
    let iconurl = ''

    const apiurl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=' + apiKey
    console.log(apiurl) 

    useEffect(() => {
        axios
            .get(apiurl)
            .then(response => {
                console.log('weather received')
                console.log(response.data)
                console.log(response.data.weather)
                console.log(response.data.weather[0].icon)
                iconurl = 'http://openweathermap.org/img/wn/' + response.data.weather[0].icon + '@2x.png'
                console.log(iconurl)
                setWeather(response.data)
                
            })
    }, [])

    if(weather !== '') {
        return (
            <div>
                <h3>{filtered[0].name.common}</h3>
                <p>Capital: {filtered[0].capital}<br></br>
                Area: {filtered[0].area} square kilometers</p>
                <b>Languages:</b>
                <ul>
                    {Object.values(filtered[0].languages).map(language => 
                        <li key={language}>{language}</li>
                    )}
                </ul>
                <img src={filtered[0].flags.png}></img>
                <h2>Weather in {filtered[0].capital}</h2> <br/>
                Temperature {Math.round((weather.main.temp - 273) * 100) / 100} Celsius <br/>
                {weather.weather[0].main}  <img src={'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'} ></img> <br/>
                Wind: {weather.wind.speed} m/s
                    
            </div>
        )
    } else {
        return (
            <div>...Loading</div>
        )
    }
}

export default Country